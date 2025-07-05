import React from "react";
import { getSession } from "@/actions/session";
import { redirect } from "next/navigation";
import Dashboard from "./_components/Dashboard";

const page = async () => {
  const session = await getSession();

  if (!session || !session?.user) {
    redirect("/login?redirectTo=/dashboard");
    return null;
  }

  // console.log(session);
  // const profile = await getProfile();

  return (
    <><Dashboard /></>
  );
};

export default page;
