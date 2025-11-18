"use client";

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

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-200 h-[12vh] z-10000 fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[92%] mx-auto">
        {/* FIRST PART */}
        <div className="flex items-center sm:space-x-20">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 rounded-full flex justify-center items-center flex-col">
              <LuNetwork className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 font-bold">
              DevHire
            </h1>
          </div>

          {/* NAVLINKS */}
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className="text-base hover:text-cyan-700 font-medium transition-all duration-200"
                >
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* SECOND PART */}
        <div className="flex items-center space-x-4">
          <Button variant="primary">Login/Register</Button>
          <Button variant="secondary">Job Post</Button>

          {/* Theme Toggler */}

          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
}
