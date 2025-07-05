"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { ScaleLoader } from "react-spinners";
import { LoginFormType } from "@/schemas/loginFormSchema";
import { handleLogin, handleSignup } from "@/actions/auth";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
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

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    if (isSubmitting) return;
    const response = await handleLogin(data, redirectTo);
    if (response?.errors) {
      const fieldErrors = response.errors;

      // Iterate through each error field and set the error
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        if (messages?.length) {
          setError(field as keyof LoginFormType, {
            type: "server",
            message: messages[0], // Show the first error message
          });
        }
      });

      return;
    }

    if(response?.message) {
      console.log(response?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-5"
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email address is required!",
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
        {isSubmitting ? <ScaleLoader height={22} /> : "Log In"}
      </Button>
    </form>
  );
}
