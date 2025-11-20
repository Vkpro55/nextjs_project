"use client";

import { IconType } from "react-icons";
import Tilt from 'react-parallax-tilt';

type Props ={
category: {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: IconType;
}
}

export default function CategoryCard({category}: Props) {
  return <Tilt scale={1.2} transitionSpeed={500}>
   <div className="p-6 bg-gray-50 dark:bg-gray-900 shadow-md flex flex-col justify-center items-center">
    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex justify-center items-center flex-col">
      {<category.icon  className="w-10 h-10 text-blue-700 dark:text-white"/>}
    </div>
    <div className="flex flex-col gap-2 mt-5 justify-between items-center">
      <p className="font-medium text-gray-800 dark:text-gray-200 text-center whitespace-nowrap">{category.categoryName}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-centre whitespace-nowrap">( <span>{category.openPositions}</span> Open Positions )</p>
    </div>
   </div>
  </Tilt>
}
