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
  return <Tilt>
    <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
        <h1>React Parallax Tilt 👀</h1>
      </div>
  </Tilt>
}
