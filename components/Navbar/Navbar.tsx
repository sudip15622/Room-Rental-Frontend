"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pages = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
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
  ];
  return (
    <header className="z-[1000] bg-[var(--bg-color)] w-full flex items-center justify-center sticky top-0 left-0">
      <nav className="w-full mx-7 max-w-7xl py-5 flex flex-row items-center justify-between">
        <Link href={"/"} className="flex flex-row gap-x-2 items-baseline-last">
          <div className="flex flex-col gap-y-1">
            <div className="w-5 h-[5px] bg-[#fea900] rounded-r-full ml-1.5"></div>
            <div className="w-5 h-[5px] bg-[#e9506e] rounded-l-full"></div>
            <div className="w-5 h-[5px] bg-[#3661fd] rounded-l-full"></div>
          </div>
          <div className="font-semibold text-xl">Room RS</div>
          {/* <div className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#fea900] via-[#e9506e] to-[#3661fd]">Room RS</div> */}
        </Link>

        <ul className="flex flex-row gap-x-10">
          {pages.map((page, index) => {
            return page.name === "Signup" ? (
              <li key={index}>
                <Link
                  href={page.link}
                  className="font-semibold bg-[var(--button-color)] p-3 rounded-2xl hover:bg-[var(--hover-color)] transition-colors duration-200"
                >
                  {page.name}
                </Link>
              </li>
            ) : (
              <li key={index}>
                <Link
                  href={page.link}
                  className={`font-semibold ${page.name === "Login" && "text-[var(--hover-color)]"} hover:text-[var(--button-color)] transition-colors duration-200 `}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
