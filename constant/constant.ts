import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";
import { IconType } from "react-icons";

export const NavLinks = [
    {
        id: 1,
        url: "#",
        label: "Home"
    },
    {
        id: 2,
        url: "#",
        label: "Find Job"
    },
    {
        id: 3,
        url: "#",
        label: "Candidates"
    },
    {
        id: 4,
        url: "#",
        label: "Employers"
    },
    {
        id: 5,
        url: "#",
        label: "Blog"
    },
    {
        id: 6,
        url: "#",
        label: "Contact"
    }
];


export interface ICategory {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: IconType;
}

export const CategoryData: ICategory[] = [
    {
        id: 1,
        categoryName: "Accounting / Finance",
        openPositions: 2,
        icon: GiTakeMyMoney
    },
    {
        id: 2,
        categoryName: "Marketing",
        openPositions: 86,
        icon: IoMegaphoneOutline
    },
    {
        id: 3,
        categoryName: "Design",
        openPositions: 43,
        icon: PiPaintBrushDuotone
    },
      {
    id: 4,
    categoryName: "Development",
    openPositions: 12,
    icon: FaLaptopCode
  },
  {
    id: 5,
    categoryName: "Project Management",
    openPositions: 2,
    icon: LuRocket
  },
  {
    id: 6,
    categoryName: "Customer Service",
    openPositions: 2,
    icon: RiCustomerService2Fill 
  },
  {
    id: 7,
    categoryName: "Health and Care",
    openPositions: 25,
    icon: MdOutlineMedicalServices
  },
  {
    id: 8,
    categoryName: "Automotive Jobs",
    openPositions: 92,
    icon: LiaCarSideSolid
  },
];

export const CompanyData = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "Udemy",
    location: "London, UK",
    position: "20",
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Stripe",
    location: "Kolkata, India",
    position: "30",
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Dropbox",
    location: "Lahore, Pakistan",
    position: "33",
  },
  {
    id: 4,
    image: "/images/c4.png",
    name: "Figma",
    location: "Dhaka, Bangladesh",
    position: "40",
  },
];

export const jobs = [
  {
    id: 1,
    image: "/images/j1.png",
    title: "Software Engineer",
    location: "London, UK",
    jobType: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 2,
    image: "/images/j2.png",
    title: "Recruiting Coordinator",
    location: "Manchester, UK",
    jobType: "Part Time",
    urgency: "Urgent",
  },
  {
    id: 3,
    image: "/images/j3.png",
    title: "Product Manager, Studio",
    location: "Birmingham, UK",
    jobType: "Contract",
    urgency: "Urgent",
  },
  {
    id: 4,
    image: "/images/j4.png",
    title: "Senior Product Designer",
    location: "Bristol, UK",
    jobType: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 5,
    image: "/images/j5.png",
    title: "Product Manager, Risk",
    location: "Edinburgh, UK",
    jobType: "Contract",
    urgency: "Private",
  },
  {
    id: 6,
    image: "/images/j6.png",
    title: "Technical Architect",
    location: "Leeds, UK",
    jobType: "Full Time",
    urgency: "Private",
  },
  {
    id: 7,
    image: "/images/j7.png",
    title: "Web Developer",
    location: "Brighton, UK",
    jobType: "Part Time",
    urgency: "Urgent",
  },
  {
    id: 8,
    image: "/images/j8.png",
    title: "Senior Product Designer",
    location: "Glasgow, UK",
    jobType: "Contract",
    urgency: "Private",
  },
  {
    id: 9,
    image: "/images/j9.png",
    title: "Senior BI Analyst",
    location: "Sheffield, UK",
    jobType: "Full Time",
    urgency: "Private",
  },
];

export const FooterData = [
  {
    id: 1,
    title: "For Candidates",
    items: [
      "Browse Jobs",
      "Browse Categories",
      "Candidate Dashboard",
      "Job Alerts",
      "My Bookmarks",
    ],
  },
  {
    id: 2,
    title: "For Employers",
    items: [
      "Browse Candidates",
      "Employer Dashboard",
      "Add Job",
      "Job Packages",
    ],
  },
  {
    id: 3,
    title: "About Us",
    items: [
      "Job page",
      "Job Page Alternative",
      "Resume Page",
      "Blog",
      "Contact",
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    items: [
      "Site Map",
      "Terms of Use",
      "Privacy Center",
      "Security Center",
      "Accessibility Center",
    ],
  },
];
