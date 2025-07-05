"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./LoginForm";
import SocialButton from "@/app/signup/_components/SocialButton";


const Login = () => {
  return (
    <main>
      <div className="mx-auto w-full max-w-md shadow-xl border-1 border-gray-300 py-5 px-10 rounded-2xl flex flex-col items-center gap-y-5">

        <div className="flex flex-col items-center justify-center">
          <Image className="w-12 h-12 object-cover" src={"/logo.png"} width={100} height={80} priority alt="Room RS"/>
          <h1 className="text-2xl font-semibold text-center">Log In</h1>
        </div>
        <SocialButton />
        <div className="w-full flex items-center justify-center">
          <span className="w-full h-[1px] bg-gray-300"></span>
          <span>Or</span>
          <span className="w-full h-[1px] bg-gray-300"></span>
        </div>
        <LoginForm />
        <div className="flex flex-row gap-x-2 justify-center">
          <p>Don&apos;t have an account?</p>
          <Link
            className="underline font-semibold text-blue-500"
            href={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
