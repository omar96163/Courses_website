"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logout from "./Logout";

const Nav = () => {
  const [scrolled, setscrolled] = useState();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <nav
      className={`flex flex-row justify-between sm:justify-around items-center text-gray-300 
        bg-gradient-to-t from-[#1c1c1f] via-[#36363b] to-[#1c1c1f]
        shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)]
        mx-2 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-40
        font-bold sticky top-1 sm:top-2 z-50
        rounded-xl md:rounded-2xl
        text-[10px] md:text-base
        transition duration-300
        mt-2 sm:mt-4 md:mt-8
        py-2 sm:py-3 md:py-4
        px-3 sm:px-4 md:px-0
        opacity-0 animate-[goDown_1s_ease_forwards_.5s] ${
          scrolled ? "scale-95 sm:scale-90 md:scale-[0.85]" : ""
        }`}
    >
      <div className="hidden lg:block absolute top-4 left-0 h-1 w-10 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="hidden lg:block absolute top-7 left-0 h-1 w-8 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="hidden lg:block absolute top-10 left-0 h-1 w-6 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="hidden lg:block absolute bottom-10 right-0 h-1 w-6 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="hidden lg:block absolute bottom-7 right-0 h-1 w-8 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="hidden lg:block absolute bottom-4 right-0 h-1 w-10 rotate-12 rounded-full bg-[#7dd3fc] animate-[bgcolor_1s_ease_infinite_alternate_2s]"></div>
      <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-5">
        <Link href={"/"}>
          <button
            type="button"
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg md:rounded-xl transition duration-500 
              hover:scale-105 hover:shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)] cursor-pointer active:scale-90 ${
                pathname == "/"
                  ? "shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)]"
                  : ""
              }`}
          >
            Home
          </button>
        </Link>
        <Link href={"/courses"}>
          <button
            type="button"
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg md:rounded-xl transition duration-500 
              hover:scale-105 hover:shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)] cursor-pointer active:scale-90 ${
                pathname == "/courses"
                  ? "shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)]"
                  : ""
              }`}
          >
            Courses
          </button>
        </Link>
        <Link href={"/users"}>
          <button
            type="button"
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg md:rounded-xl transition duration-500 
              hover:scale-105 hover:shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)] cursor-pointer active:scale-90 ${
                pathname == "/users"
                  ? "shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)]"
                  : ""
              }`}
          >
            Users
          </button>
        </Link>
      </div>
      <Logout />
    </nav>
  );
};

export default Nav;
