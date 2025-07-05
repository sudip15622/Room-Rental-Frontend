"use client";
import React from "react";
import { Button } from "@mui/material";

import { FcGoogle } from "react-icons/fc";
import { BACKEND_URL } from "@/constants";

const SocialButton = () => {
  const handleGoogleLogin = () => {
    const url = `http://localhost:4000/auth/google/login`;
    window.location.href = url;
  }
  return (
    <Button onClick={() => handleGoogleLogin()} variant="outlined" size="large" fullWidth startIcon={<FcGoogle />}>
      Continue with Google
    </Button>
  );
};

export default SocialButton;
