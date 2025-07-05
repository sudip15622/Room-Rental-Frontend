"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { ScaleLoader } from "react-spinners";
import { SignupFormType } from "@/schemas/signupFormSchema";
import { handleSignup } from "@/actions/auth";

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    if (isSubmitting) return;
    const response = await handleSignup(data);
    if (response?.errors) {
      const fieldErrors = response.errors;

      // Iterate through each error field and set the error
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        if (messages?.length) {
          setError(field as keyof SignupFormType, {
            type: "server",
            message: messages[0], // Show the first error message
          });
        }
      });

      return;
    }
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-5"
    >
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Full name is required!",
          pattern: {
            value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
            message:
              "Name must contain only letters and a single space between words!",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Full Name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email address is required!",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address!",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email Address"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password id required!",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            message:
              "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long!",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button
        disabled={!isValid || isSubmitting}
        variant="contained"
        size="large"
        type="submit"
        fullWidth
      >
        {isSubmitting ? <ScaleLoader height={22} /> : "Sign Up"}
      </Button>
    </form>
  );
}
