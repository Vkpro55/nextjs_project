"use client";

import ThemeToggler from "@/components/Helper/ThemeToggler";
import Button from "@/components/ui/Button";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";

interface NavbarProps {
  openNav: () => void;
}

export default function Navbar({ openNav }: NavbarProps) {
  const [navBg, setNavBg] = useState(false);

  // Only run scroll logic on client
 useEffect(() => {
  const handler = () => {
    setNavBg(window.scrollY >= 90);
  };

  handler(); // run once on mount (client ONLY)

  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
}, []);

  return (
    <div
      className={`w-full transition-all duration-200 h-[12vh] z-10000 fixed ${
        navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[92%] mx-auto">
        
        {/* FIRST PART */}
        <div className="flex items-center sm:space-x-20">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex justify-center items-center">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold">
              DevHire
            </h1>
          </div>

          {/* NAVLINKS */}
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* SECOND PART */}
        <div className="flex items-center space-x-4">
          <Button variant="primary">Login / Register</Button>
          <Button variant="secondary">Job Post</Button>

          {/* Theme Toggler */}
          <ThemeToggler />

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>

      </div>
    </div>
  );
}
