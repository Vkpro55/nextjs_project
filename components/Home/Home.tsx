import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Job from "./Job/Job";
import TopCompany from "./TopCompany/TopCompany";

export default function Home() {
  return (
    <div className="overflow-hidden">
     <Hero/>
     <Category/>
     <Job/>
     <TopCompany/>
    </div>
  )
}
