'use client'

import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function ResponsiveNavbar() {
  const [showNavbar, setShowNavbar] =useState(false);

  const openNavbarHandler = () => setShowNavbar(true);
  const closeNavbarHandler =() => setShowNavbar(false);

  return (
    <div>
      <Navbar openNav={openNavbarHandler}/>
      <MobileNavbar showNav={showNavbar} closeNav={closeNavbarHandler}/>
    </div>
  )
}
