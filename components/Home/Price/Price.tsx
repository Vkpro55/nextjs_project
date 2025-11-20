import SectionHeading from "@/components/Helper/SectionHeading";
import PriceCard from "./PriceCard";

export default function Price() {
  return (
    <div className="mt-16 mb-16">
      <SectionHeading
        heading="Pricing Packages"
        subheading="Lorem ipsum dolor sit amet elit, sed do eiusmod tempor."
      />

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <PriceCard
          type="Basic"
          price="199"
          isRecommended={false}
         index={1}
        />
        <PriceCard
          type="Standard"
          price="399"
          isRecommended={true}
          index={2}
        />
        <PriceCard
          type="Extended"
          price="799"
          isRecommended={false}
          index={3}
        />
      </div>
    </div>
  );
}
