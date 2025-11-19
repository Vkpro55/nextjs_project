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

// className="w-10 h-10 text-blue-700 dark:text-white"