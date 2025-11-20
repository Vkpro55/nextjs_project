import { BiCheck } from "react-icons/bi";
import { DiVim } from "react-icons/di";

type Props = {
  type: string;
  price: string;
  isRecommended: boolean;
  index: number;
};

export default function PriceCard({
  type,
  price,
  isRecommended,
  index,
}: Props) {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative"
      data-aos="fade-right"
      data-aos-anchor-placement="top-centre"
      data-aos-delay={index * 100}
    >
      {/* recomended tag */}
      {isRecommended && (
        <div className="absolute top-7 right-7 rounded-full py-1.5 px-6 bg-green-800 text-xs text-white">
          Recommended
        </div>
      )}

      {/* type */}
      <h1 className="mt-6 text-xl font-bold text-blue-900 dark:text-blue-200">
        {type}
      </h1>

      {/* Price */}
      <div className="mt-3">
        <span className="text-4xl font-bold text-blue-950 dark:text-white">
          ${price}
        </span>{" "}
        / Monthly
      </div>

      {/* Feature list */}
      <div className="mt-12">
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            1 Job Posting
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            0 featured job
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Job displayed for 20 days
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Premium Support 24/7
          </span>
        </div>
      </div>

      {/* profile button */}
      <div className="mt-8 text-center">
        <button className="w-full py-3 bg-blue-900/15 dark:bg-gray-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer">
          View Profile
        </button>
      </div>
    </div>
  );
}
