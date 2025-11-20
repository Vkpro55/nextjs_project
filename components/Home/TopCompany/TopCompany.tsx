'use client'

import SectionHeading from "@/components/Helper/SectionHeading";
import { CompanyData } from "@/constant/constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopCompanyCard from "./TopCompanyCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TopCompany() {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Top Company Registered"
        subheading="Some of the companies we've helped recruit excellent applicants over the years."
      />

      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
         {CompanyData.map((company) => {
            return <TopCompanyCard key={company.id} company={company}/>
         })}
        </Carousel>
        ;
      </div>
    </div>
  );
}
