"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaUserCircle, FaCaretUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  return (
    <main>
      <div className="flex flex-row justify-between items-start gap-x-10 ">
        <div className="w-full max-w-xl flex flex-col gap-y-6 mt-8">
          <div className="flex flex-row items-center bg-[#25273e] w-fit px-4 py-2 rounded-xl">
            {/* <div className="bg-[#e95326] text-[var(--text-color)] rounded-full p-2 text-xl mr-3"><TbLetterT /></div> */}
            <div className="text-[#e95326] text-3xl mr-4">
              <FaUserCircle />
            </div>
            <div className="flex flex-col mr-10">
              <div className="text-[8px] font-semibold">FEATURED ON</div>
              <div className="font-semibold text-[14px]">Recent Traffics</div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <FaCaretUp />
              </div>
              <div className="font-semibold text-[10px]">210</div>
            </div>
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              Rent Smarter
            </span>
            <span> in Nepal &ndash; </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              Book & Manage{" "}
            </span>
            <span>Rooms Online</span>
          </h1>

          <p className="text-[var(--text-sec-color)]">
            Designed for Nepal&apos;s rental market, our SaaS platform helps
            property owners and managers automate bookings, track payments, and
            fill vacancies faster. Grow your rental business&mdash;all from one
            powerful dashboard.
          </p>

          <div className="flex flex-row gap-x-10 mt-2 items-center">
            <Link
              href={"/"}
              className="font-semibold bg-[var(--button-color)] hover:bg-[var(--hover-color)] transition-colors duration-200 p-4 rounded-2xl flex flex-row gap-x-2 items-center justify-center"
            >
              <span>Search for rooms</span>
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
            <Link
              href={"/"}
              className="text-[var(--hover-color)] font-semibold hover:text-[var(--button-color)] transition-colors duration-200"
            >
              Manage my rooms
            </Link>
          </div>
        </div>

        <picture
          className="flex items-center justify-center overflow-hidden w-full max-w-md opacity-85 
  [filter:drop-shadow(0_0_5px_#fea900)_drop-shadow(0_0_5px_#e9506e)_drop-shadow(0_0_5px_#3661fd)]
  hover:[filter:drop-shadow(0_0_7px_#fea900)_drop-shadow(0_0_7px_#e9506e)_drop-shadow(0_0_7px_#3661fd)]
  transition-all duration-400"
        >
          <Image
            className="object-cover h-full w-full"
            src="/hero_image4.png"
            alt="hero-image"
            width={500}
            height={500}
            priority
          />
        </picture>
      </div>
    </main>
  );
};

export default HomePage;
