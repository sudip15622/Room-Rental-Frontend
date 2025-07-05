"use server";
import { BACKEND_URL, BASE_URL } from "../constants";
import { LoginFormSchema, LoginFormType } from "@/schemas/loginFormSchema";
import { SignupFormSchema, SignupFormType } from "@/schemas/signupFormSchema";
import { redirect } from "next/navigation";
import { createSession, updateSession } from "./session";

interface ISignupReturn {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string;
}
interface ILoginReturn {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
}

export async function handleSignup(
  details: SignupFormType,
  redirectTo: string = "/login"
): Promise<ISignupReturn | undefined> {
  const validationFields = SignupFormSchema.safeParse({
    name: details.name,
    email: details.email,
    password: details.password,
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    redirect(redirectTo);
  } else {
    return {
      message:
        response.status === 409
          ? "The user with this email already exists!"
          : response.statusText,
    };
  }
}

export async function handleLogin(
  details: LoginFormType,
  redirectTo: string = "/"
): Promise<ILoginReturn | undefined> {
  const validationFields = LoginFormSchema.safeParse({
    email: details.email,
    password: details.password,
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    const result = await response.json();

    //Create session for authenticated user.
    await createSession({
      user: {
        id: result.id,
        name: result.name,
        image: result.image,
        roles: result.roles,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    redirect(redirectTo);
  } else {
    return {
      message:
        response.status === 401 ? "Invalid Credentails!" : response.statusText,
    };
  }
}

export async function refreshToken(oldRefreshToken: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: oldRefreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token: " + response.statusText);
    }

    const { accessToken, refreshToken } = await response.json();

    await updateSession({accessToken, refreshToken});
    const updateRes = await fetch(`${BASE_URL}/api/auth/update`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
        refreshToken
      }),
    })

    if(!updateRes.ok) throw new Error("Cannot update new tokens in session!");

    return accessToken;
  } catch (error) {
    console.error("Refresh Token failed: ", error);
    return null;
  }
}
