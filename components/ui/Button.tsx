type variantType = "primary" | "secondary";

interface ButtonProps {
  variant: variantType
  children: React.ReactNode;
  className?: string;
}

const baseStyles = "px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer transion-all duration-300";
const variants : Record<variantType, string> = {
    "primary": "bg-gray-100 hover:bg-gray-300",
    "secondary": "hidden sm:block text-white bg-cyan-700 hover:bg-cyan-900"
}

export default function Button({
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
}
