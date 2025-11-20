"use client";

import { useEffect } from "react";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Job from "./Job/Job";
import Price from "./Price/Price";
import Review from "./Review/Review";
import TopCompany from "./TopCompany/TopCompany";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 *
 * @returns There are two reasons we use import ('aos') inside te useEffect
 * - aos need browser interaction may cause error like not window etc not defined on server component
 * - aos need dom to interact -> so idea let the dom to molunt first(render if you know that) and then run useEffect
 */

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <Job />
      <TopCompany />
      <Info />
      <Price />
      <Review />
    </div>
  );
}
