"use client";
import { useTheme } from "@/context/ThemeContext";
import cx from "@/libs/cx";
import React from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";

interface ButtonThemeProps {
  className?: string;
}

export default function ButtonTheme({ className }: ButtonThemeProps) {
  const { isDarkmode, toggleDarkmode } = useTheme();

  return (
    <button
      onClick={toggleDarkmode}
      className={cx("p-2 rounded-lg border border-slate-200", className)}
    >
      {!isDarkmode ? <LuMoon /> : <LuSunMedium className="text-amber-300" />}
    </button>
  );
}
