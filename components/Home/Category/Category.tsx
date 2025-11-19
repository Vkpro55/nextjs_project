import SectionHeading from "@/components/Helper/SectionHeading";
import { CategoryData } from "@/constant/constant";
import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Popular Job Categories"
        subheading="2020 jobs live - 293 added today."
      />
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CategoryData.map((category) => {
          return (
            <div key={category.id}>
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
