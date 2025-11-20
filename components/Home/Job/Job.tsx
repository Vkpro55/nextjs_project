import SectionHeading from "@/components/Helper/SectionHeading";
import { jobs } from "@/constant/constant";
import JobCard from "./JobCard";

export default function Job() {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Featured Jobs"
        subheading="Know your worth and find the job that qualify your life"
      />
      <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {jobs.map((job, index) => {
          return (
            <div
              key={job.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-centre"
              data-aos-delay={index * 100}
            >
              <JobCard job={job} />
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center text-centre ">
        <button className="px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all duration-200">
          Load More Listing
        </button>
      </div>
    </div>
  );
}
