import Image from "next/image";
import JobSearchBar from "./JobSearchBar";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <h1 className="text-3xl sm:text-6xl font-bold">
            Join us & Explore Thousands of Jobs
          </h1>
          <p className="mt-4 text-sm sm:text-lg font-medium">
            Find Jobs, Employment & Career Opportunities
          </p>

          <JobSearchBar />
          {/* popular search */}
          <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6">
            <span>Popular Searches : </span>
            <span className="text-sm font-light text-gray-700 dark:text-gray-300">
              Designer , Developer , Web , IOS , PHP , Senior , Engineer
            </span>
          </div>
        </div>

        {/* Image Content */}
        {/* <div className="relative hidden xl:block w-full h-full">
          <Image
            src="/images/hero.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div> */}

        <div className="hidden xl:block" data-aos="fade-left" data-aos-delay="150">
          <Image
            src="/images/hero.png"
            alt="hero-image"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
