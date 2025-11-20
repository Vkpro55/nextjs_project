import Image from "next/image";
import { GrLocation } from "react-icons/gr";

type Props = {
  company: {
    id: number;
    image: string;
    name: string;
    location: string;
    position: string;
  };
};

export default function TopCompanyCard({ company }: Props) {
  return <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 m-3">
    <Image src={company.image} alt={company.name} width={80} height={80} className="object-cover mx-auto"/>
    <h1 className="text-lg font-medium mt-4 text-center text-gray-800 dark:text-gray-200">{company.name}</h1>
    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1 justify-center mt-3">
        <GrLocation/>
        <p>{company.location}</p>
    </div>
    <div className="px-10 py-3 bg-blue-700/10 cursor-pointer hover:bg-blue-800 transition-all duration-300 hover:text-white text-blue-800 dark:text-gray-200 rounded-lg mt-4 text-sm text-centre">
        {company.position} Open Position
    </div>
  </div>;
}
