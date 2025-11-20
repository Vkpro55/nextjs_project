import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Job from "./Job/Job";
import Price from "./Price/Price";
import Review from "./Review/Review";
import TopCompany from "./TopCompany/TopCompany";

export default function Home() {
  return (
    <div className="overflow-hidden">
     <Hero/>
     <Category/>
     <Job/>
     <TopCompany/>
     <Info/>
     <Price/>
     <Review/>
    </div>
  )
}
