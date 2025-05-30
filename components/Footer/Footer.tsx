"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const mainPages = [
    {
      title: "Room RS",
      pages: [
        {
          name: "About",
          link: "/",
        },
        // {
        //   name: "Pricing",
        //   link: "/",
        // },
        {
          name: "Rooms",
          link: "/",
        },
        {
          name: "Login",
          link: "/",
        },
        {
          name: "Signup",
          link: "/",
        },
      ],
    },
    {
      title: "Company",
      pages: [
        {
          name: "Legals",
          link: "/",
        },
        {
          name: "Privacy Policy",
          link: "/",
        },
        {
          name: "Term of Service",
          link: "/",
        },
        {
          name: "Contack",
          link: "/",
        },
      ],
    },
    {
      title: "Socials",
      pages: [
        {
          name: "Facebook",
          link: "/",
        },
        {
          name: "Twitter",
          link: "/",
        },
        {
          name: "Instagram",
          link: "/",
        },
        {
          name: "Forum",
          link: "/",
        },
      ],
    },
  ];
  return (
    <div className="bg-[var(--bg-color)] w-full flex items-center justify-center mb-10">
      <footer className="w-full mx-7 max-w-7xl flex flex-row items-stretch justify-between">
        <div className="flex flex-col justify-between">
          <Link
            href={"/"}
            className="flex flex-row gap-x-2 items-baseline-last"
          >
            <div className="flex flex-col gap-y-1">
              <div className="w-5 h-[5px] bg-[#fea900] rounded-r-full ml-1.5"></div>
              <div className="w-5 h-[5px] bg-[#e9506e] rounded-l-full"></div>
              <div className="w-5 h-[5px] bg-[#3661fd] rounded-l-full"></div>
            </div>
            <div className="font-semibold text-xl">Room RS</div>
            {/* <div className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#fea900] via-[#e9506e] to-[#3661fd]">Room RS</div> */}
          </Link>
          <div className="flex flex-col gap-y-2">
            <p className="text-lg text-gray-300">
              Where Renters and Landlords Connect.
            </p>
            <p className="text-[var(--text-sec-color)]">
              2025 Room RS - All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-24">
          {mainPages.map((mainPage, index) => {
            return (
              <div key={index} className="flex flex-col gap-y-4">
                <h3 className="font-semibold text-lg text-[var(--text-sec-color)]">
                  {mainPage.title}
                </h3>
                <ul className="flex flex-col gap-y-4">
                  {mainPage.pages.map((page, index) => {
                    return page.name === "Signup" ? (
                      <li key={index}>
                        <Link
                          href={page.link}
                          className="bg-[var(--button-color)] -ml-3 p-3 rounded-2xl hover:bg-[var(--hover-color)] transition-colors duration-200"
                        >
                          {page.name}
                        </Link>
                      </li>
                    ) : (
                      <li key={index}>
                        <Link
                          href={page.link}
                          className={`${
                            page.name === "Login" && "text-[var(--hover-color)]"
                          } hover:text-[var(--button-color)] transition-colors duration-200 `}
                        >
                          {page.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
