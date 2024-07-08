"use client";

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    currentTheme === "dark" ? setDarkMode(true) : setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer bg-primary hover:bg-[#000021] text-accent dark:text-primary dark:bg-accent dark:hover:bg-accent-hover"
      onClick={handleDarkMode}>
      {darkMode ? <BsSunFill /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggler;
