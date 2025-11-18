import { JSX } from "react";

type variantType = "primary";

interface ButtonProps {
  variant?: variantType;
  themeHandler: () => void;
  icon: JSX.Element
}

const baseStyles =
  "p-2 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center";
const variants: Record<variantType, string> = {
  primary: "bg-blue-950 dark:bg-white",
};

export default function Circlebutton({
  variant = "primary",
  themeHandler,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={themeHandler}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon}
    </button>
  );
}
