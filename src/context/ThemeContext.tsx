"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  isDarkmode: boolean;
  toggleDarkmode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setIsDarkmode((prev) => !prev);
    localStorage.setItem("darkmode", isDarkmode ? "false" : "true");
  };

  useEffect(() => {
    const storedDarkmode = localStorage.getItem("darkmode");

    if (!storedDarkmode) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkmode(isDark);
      localStorage.setItem("darkmode", isDark ? "true" : "false");
      return;
    }

    if (storedDarkmode === "true") {
      setIsDarkmode(true);
    } else {
      setIsDarkmode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkmode]);

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
