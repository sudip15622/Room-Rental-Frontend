import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSession } from "@/actions/session";
import UserButton from "./UserButton";

const Navbar = async () => {
  const session = await getSession();

  return (
    <header className="z-[1000] bg-[var(--background)] w-full flex items-center justify-center sticky top-0 left-0 shadow-sm">
      <nav className="w-full mx-7 max-w-7xl py-4 flex flex-row items-center justify-between">
        <Link href={"/"} className="flex flex-row gap-x-2 items-center">
          <Image
            className="w-12 h-12 object-cover"
            src={"/logo.png"}
            width={80}
            height={80}
            priority
            alt="Room RS"
          />
          <div className="font-semibold text-xl">Room RS</div>
        </Link>
        <div className="flex flex-row gap-x-10 items-center">
          <Link className="text-lg" href={"/"}>
            About
          </Link>
          <Link className="text-lg" href={"/"}>
            List my Property
          </Link>

          {session && session.user ? (
            <UserButton user={session.user} />
          ) : (
            <>
              <Link href={"/login"} className="text-[#1976d2] text-lg">
                Login
              </Link>
              <Link
                href={"/signup"}
                className="bg-[#1976d2] px-5 py-2 rounded-2xl text-[var(--background)]"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
