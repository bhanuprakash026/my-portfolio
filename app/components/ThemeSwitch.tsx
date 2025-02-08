"use client"
import { useTheme } from "@/Context/ThemeContextProvider";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";


const ThemeSwitch = () => {
  const {theme, toggleTheme} = useTheme ()

  return (
    <button
      onClick={toggleTheme}
      className="z-[1000000] fixed bottom-5 right-5 mr-7 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white shadow-xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all rounded-full dark:bg-gray-800 bg-gray-200"
    >
      {theme === "light" ? <BsSun className="text-black" /> : <BsMoon className="text-gray-300" />}
    </button>
  );
};

export default ThemeSwitch;
