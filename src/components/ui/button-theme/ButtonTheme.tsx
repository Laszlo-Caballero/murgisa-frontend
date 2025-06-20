"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";

export default function ButtonTheme() {
  const { isDarkmode, toggleDarkmode } = useTheme();

  return (
    <button
      onClick={toggleDarkmode}
      className="p-2 rounded-lg border border-slate-200"
    >
      {!isDarkmode ? <LuMoon /> : <LuSunMedium className="text-amber-300" />}
    </button>
  );
}
