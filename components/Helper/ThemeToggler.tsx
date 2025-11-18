"use client";

import { useTheme } from "next-themes";
import { JSX, useEffect, useState } from "react";
import Circlebutton from "../ui/CircleButton";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // after this code never run on the server -> retur null -> useEffect only run in client-side and then only all the code after this will work

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeHandler = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const iconChanger = (): JSX.Element => {
    if (currentTheme === "dark") {
      return <BiSun className="text-white dark:text-black w-7 h-7" />;
    } else {
      return <BiMoon className="text-white dark:text-black w-7 h-7" />;
    }
  };

  return <Circlebutton themeHandler={themeHandler} icon={iconChanger()} />;
}
