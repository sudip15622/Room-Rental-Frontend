"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaAngleDown } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const UserButton = ({ user }: { user: any }) => {
  const router = useRouter();

  const [showDash, setShowDash] = useState<boolean>(false);
  const showDashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showDashRef.current &&
        !showDashRef.current.contains(event.target as Node)
      ) {
        setShowDash(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getFirstName = (name: string): string => {
    const firstName = name.split(" ")[0];
    return firstName;
  };

  const handleSignOut = async () => {
    await fetch("/api/auth/logout");
    setShowDash(false);
    router.refresh();
  };

  return (
    <div className="relative min-w-44" ref={showDashRef}>
      <button
        onClick={() => setShowDash(!showDash)}
        className="flex items-center flex-row justify-between w-full border-1 border-gray-300 px-3 py-2 rounded-2xl cursor-pointer shadow-md"
      >
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Image
            className="rounded-full"
            src={user.image}
            alt="user-avatar"
            width={30}
            height={30}
          />
          <div>{getFirstName(user.name).slice(0, 10)}</div>
        </div>
        <div className={`flex items-center justify-center text-xl`}>
          <FaAngleDown />
        </div>
      </button>
      <div
        className={`z=[1000] absolute overflow-hidden top-10 bg-[var(--background)] border-1 border-gray-300 rounded-2xl shadow-md min-w-44 ${
          showDash
            ? "pointer-events-auto opacity-100 translate-y-4"
            : "pointer-events-none opacity-0"
        } transition-all duration-200 ease-in-out`}
      >
        <Link
          href={"/dashboard"}
          onClick={() => setShowDash(false)}
          className="w-full flex items-center justify-start flex-row pt-4 px-3 pb-2 hover:bg-gray-300 transition-colors duration-200 ease-in-out"
        >
          Dashboard
        </Link>
        <button
          onClick={() => handleSignOut()}
          className="w-full flex items-center justify-start flex-row gap-x-2 text-red-400 pt-2 pb-4 px-3 hover:bg-gray-300 transition-colors duration-200 ease-in-out"
        >
          <span>Log Out</span>
          <span className="flex items-center justify-center">
            <MdLogout />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserButton;
