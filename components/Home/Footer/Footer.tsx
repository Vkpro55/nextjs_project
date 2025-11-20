import { FooterData } from "@/constant/constant";
import { LuNetwork } from "react-icons/lu";
import FooterCard from "./FooterCard";

export default function Footer() {
  return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      {/* why you choose w-[90%] over w-full and then left and right padding -> because on smaller we need to apply diff. padding but w-[90%] work responsive. Dont need to do exta work*/}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {/* 1st part */}
        <div className="xl:col-span-2">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex justify-center items-center">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold">
              DevHire
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi, omnis ad beatae necessitatibus quaerat! Atque fugiat
          </p>

          {/* call */}
          <div className="mt-5">
            <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-bold">
              Call Us
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">
              +91 8900890089
            </p>
          </div>

          {/* address */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-4 space-y-2">
            <p>India</p>
            <p>Delhi South</p>
            <p>developer@example.com</p>
          </div>
        </div>

        {/* all other parts */}
        {FooterData.map((data) => {
          return <FooterCard key={data.id} data={data} />;
        })}
      </div>

      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500">© 2025 vinodkumar. All Right Reserved.</p>
      </div>
    </div>
  );
}
