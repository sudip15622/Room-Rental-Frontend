"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaUserCircle,
  FaCaretUp,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  const reviews = [
    {
      image: "/sudip.jpg",
      name: "Sudip Lamichhane",
      address: "Bharatpur-5, Chitwan",
      role: "Tenant",
      description:
        "Room RS made finding a room so easy! The verified listings and in-app chat helped me secure a great place fast. My landlord is responsive, and rent payments are seamless. Highly recommend!",
      date: "Feb 24, 2024",
      scale: "scale-90",
      translate: "translate-x-[20%]",
      zindex: "z-40",
    },
    {
      image: "/narayan.jpg",
      name: "Narayan Dahal",
      address: "Madi-7, Chitwan",
      role: "Tenant",
      description:
        "The roommate-matching feature is genius! Found someone with my lifestyle. Lease signing was digital, and the support team helped with move-in. Room RS gets rental stress!",
      date: "Feb 24, 2024",
      scale: "scale-80",
      translate: "translate-x-[-50%] translate-y-[-40%]",
      zindex: "z-30",
    },
    {
      image: "/ln_sir.jpg",
      name: "Lekh Nath Subedi",
      address: "Madi-3, Chitwan",
      role: "Landlord",
      description:
        "Listing my room on Room RS was effortless. The tenant screening is thorough, and payments are automatic. No more chasing rent—just reliable tenants. Perfect for first-time landlords!",
      date: "Feb 24, 2024",
      scale: "scale-100",
      translate: "translate-x-[40%] translate-y-[-110%]",
      zindex: "z-50",
    },
    {
      image: "/tn_sir.jpg",
      name: "Tej Narayan Regmi",
      address: "Bharatpur-11, Chitwan",
      role: "Landlord",
      description:
        "Room RS saves me time—tenants are pre-vetted, and the app handles reminders. My room stays occupied with quality renters. The best platform I’ve used for rentals!",
      date: "Feb 24, 2024",
      scale: "scale-70",
      translate: "translate-x-[-20%] translate-y-[-185%]",
      zindex: "z-10",
    },
    {
      image: "/sandip.jpg",
      name: "Sandip Adhikari",
      address: "Bharatpur-5, Chitwan",
      role: "Tenant",
      description:
        "No scams, no hassle. Room RS’s review system helped me pick a safe place. Landlord fixes issues quickly, and the app makes everything transparent. 10/10 experience!",
      date: "Feb 24, 2024",
      scale: "scale-60",
      translate: "translate-y-[-225%]",
      zindex: "z-20",
    },
  ];
  return (
    <main>
      <section className="flex flex-row justify-between items-start gap-x-10 ">
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
              className="w-fit font-semibold bg-[var(--button-color)] hover:bg-[var(--hover-color)] transition-colors duration-200 p-4 rounded-2xl flex flex-row gap-x-2 items-center justify-center"
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
          className="flex items-center justify-center overflow-hidden w-full max-w-md opacity-75 
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
      </section>

      <section className="flex items-center justify-center relative">
        <div className="bg-[#25273e] flex items-center justify-center flex-col gap-y-5 p-20 rounded-full h-full min-h-[576px] w-full max-w-xl text-center mx-auto">
          <div className="text-xs font-semibold">HOW WE WORK</div>
          <h1 className="text-3xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              Rent Rooms
            </span>
            <span> in just few </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              Simple Steps
            </span>
          </h1>
          <p className="text-[var(--text-sec-color)]">
            Find, book, and move in—seamlessly. Browse verified rooms, secure
            instant bookings, and pay safely through our platform.
          </p>
          <Link
            href={"/"}
            className="w-fit font-semibold p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b] rounded-2xl hover:text-[var(--button-color)] transition-colors duration-200"
          >
            <div className="bg-[#25273e] transition-colors duration-200 p-4 rounded-[14px] flex flex-row gap-x-2 items-center justify-center">
              <span>Search for rooms</span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </Link>
        </div>
        <picture className="opacity-85 absolute rounded-xl top-1/2 left-1/2 translate-x-[115%] -translate-y-[220%] flex items-center justify-center h-[120] w-[220] overflow-hidden p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
          <Image
            className="h-full w-full object-cover rounded-[10px]"
            src={"/step1.jpg"}
            alt="step-1"
            width={200}
            height={150}
            priority
          />
        </picture>
        <picture className="opacity-85 absolute rounded-xl top-1/2 left-1/2 -translate-x-[290%] -translate-y-[140%] flex items-center justify-center h-[150] w-[150] overflow-hidden p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
          <Image
            className="h-full w-full object-cover rounded-[10px]"
            src={"/step2.jpg"}
            alt="step-1"
            width={200}
            height={150}
            priority
          />
        </picture>
        <picture className="opacity-85 absolute rounded-xl top-1/2 left-1/2 -translate-x-[250%] translate-y-[250%] flex items-center justify-center h-[70] w-[110] overflow-hidden p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b] ">
          <Image
            className="h-full w-full object-cover rounded-[10px]"
            src={"/step3.jpg"}
            alt="step-1"
            width={200}
            height={150}
            priority
          />
        </picture>
        <picture className="opacity-85 absolute rounded-xl top-1/2 left-1/2 translate-x-[190%] translate-y-[20%] flex items-center justify-center h-[180] w-[130] overflow-hidden p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
          <Image
            className="h-full w-full object-cover rounded-[10px]"
            src={"/step4.jpg"}
            alt="step-1"
            width={200}
            height={150}
            priority
          />
        </picture>
      </section>

      <section className="w-full flex items-center justify-between gap-x-10 mb-10">
        <div className="w-full max-w-md flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold">Seamless Digital Bookings</h1>
          <h2 className="text-lg font-semibold text-[var(--text-sec-color)]">
            <span>No more </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              back-and-forth calls
            </span>
          </h2>
          <p className="text-[var(--text-sec-color)]">
            Tenants can view real-time availability and book
            instantly&mdash;automatically synced to your calendar.
          </p>
          <Link
            href={"/"}
            className="flex flex-row gap-x-2 items-center text-[var(--hover-color)] font-semibold hover:text-[var(--button-color)] transition-colors duration-200"
          >
            <span>Learn more</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full max-w-2xl">
          <picture className=" items-center justify-center w-full max-w-xl h-[300px] overflow-hidden opacity-85 rounded-xl border-2 border-[var(--bg-sec-color)] shadow-[0_40px_80px_rgba(0,0,0,0.45),-10px_14px_50px_rgba(0,0,0,0.1),10px_14px_30px_rgba(0,0,0,0.1)]">
            <Image
              className="w-full h-full object-cover"
              src={"/booking1.png"}
              alt="booking"
              width={500}
              height={350}
              priority
            />
          </picture>

          <picture className="z-5 translate-x-[-70%] translate-y-[50%] flex items-center justify-center w-full max-w-[120px] h-[240px] overflow-hidden opacity-85 rounded-xl p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b] shadow-[0_40px_80px_rgba(245,138,69,0.2),-5px_10px_20px_rgba(245,138,69,0.1),5px_10px_20px_rgba(228,88,123,0.1)]">
            <Image
              className="w-full h-full object-cover rounded-[10px]"
              src={"/booking2.png"}
              alt="booking"
              width={80}
              height={100}
              priority
            />
          </picture>
        </div>
      </section>

      <section className="w-full flex items-center justify-between gap-x-10">
        <div className="flex items-center justify-start w-full max-w-2xl">
          <picture className=" items-center justify-center w-full max-w-xl h-[350px] overflow-hidden opacity-85 rounded-xl border-2 border-[var(--bg-sec-color)] shadow-[0_40px_80px_rgba(0,0,0,0.45),-10px_14px_50px_rgba(0,0,0,0.1),10px_14px_30px_rgba(0,0,0,0.1)]">
            <Image
              className="w-full h-full object-cover"
              src={"/booking1.png"}
              alt="booking"
              width={500}
              height={350}
              priority
            />
          </picture>

          <picture className="z-5 translate-x-[-50%] translate-y-[50%] flex items-center justify-center w-full max-w-[220px] h-[110px] overflow-hidden opacity-85 rounded-xl p-[2px] bg-gradient-to-r from-[#f58a45] to-[#e4587b] shadow-[0_20px_40px_rgba(245,138,69,0.2),-5px_5px_20px_rgba(245,138,69,0.1),5px_5px_20px_rgba(228,88,123,0.1)]">
            <Image
              className="w-full h-full object-cover rounded-[10px]"
              src={"/booking1.png"}
              alt="booking"
              width={80}
              height={100}
              priority
            />
          </picture>
        </div>
        <div className="w-full max-w-md flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold">Hassle-Free Payments</h1>
          <h2 className="text-lg font-semibold text-[var(--text-sec-color)]">
            <span>Get paid </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
              on time, every time
            </span>
          </h2>
          <p className="text-[var(--text-sec-color)]">
            Secure online payments with automated reminders and deposit handling
            for peace of mind.
          </p>
          <Link
            href={"/"}
            className="flex flex-row gap-x-2 items-center text-[var(--hover-color)] font-semibold hover:text-[var(--button-color)] transition-colors duration-200"
          >
            <span>Learn more</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-y-5 items-center">
        <h1 className="text-3xl font-semibold text-center">
          Loved by Renters & Landlords
        </h1>
        <h2 className="text-lg font-semibold text-[var(--text-sec-color)] text-center w-full max-w-2xl">
          <span>Finally, a </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
            stress-free
          </span>
          <span> way to rent! &mdash; </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
            Verified tenants faster
          </span>
          <span> move-ins, while </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
            landlords
          </span>
          <span> enjoy </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58a45] to-[#e4587b]">
            ontime
          </span>
          <span> payments</span>
        </h2>

        <div className="flex w-full justify-center h-[600px] overflow-hidden mt-10">
          <div className="flex flex-col">
            {reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-row p-5 gap-x-4 ${review.zindex} ${review.scale} ${review.translate} bg-gray-200 text-[var(--bg-color)] w-full max-w-lg rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.8),-10px_14px_50px_rgba(0,0,0,0.2),10px_14px_30px_rgba(0,0,0,0.2)]`}
                >
                  <picture className="min-w-[50px] w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-full">
                    <Image
                      className="w-full h-full object-cover"
                      src={review.image}
                      alt={`rs-user-${index}`}
                      width={50}
                      height={50}
                      priority
                    />
                  </picture>
                  <div className="flex flex-col gap-y-1">
                    <h3 className="text-lg font-bold">{review.name}</h3>
                    <p className="opacity-70">{review.address}</p>
                    <p>« {review.description} »</p>
                    <div className="mt-4 flex flex-row gap-x-2 items-baseline-last opacity-70">
                      <div className="flex flex-col gap-y-[2px]">
                        <div className="w-4 h-[4px] bg-[#fea900] rounded-r-full ml-1.5"></div>
                        <div className="w-4 h-[4px] bg-[#e9506e] rounded-l-full"></div>
                        <div className="w-4 h-[4px] bg-[#3661fd] rounded-l-full"></div>
                      </div>
                      <p>
                        Room RS {review.role}, {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
