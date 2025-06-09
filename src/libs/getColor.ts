import { Color } from "@/interfaces/color.interace";

interface ColorMap {
  bgColor: string;
  textColor: string;
  activeColor?: string;
}

export function getColor(color?: Color) {
  const colors: Record<Color, ColorMap> = {
    black: {
      bgColor: "bg-black/20",
      textColor: "text-black",
    },
    blue: {
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-800",
      activeColor: "bg-blue-500/10",
    },
    green: {
      bgColor: "bg-green-500/20",
      textColor: "text-green-800",
      activeColor: "bg-green-500/10",
    },
    red: {
      bgColor: "bg-red-500/20",
      textColor: "text-red-500",
    },
    yellow: {
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-500",
    },
    purple: {
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-800",
      activeColor: "bg-purple-500/10",
    },
    gray: {
      bgColor: "bg-gray-500/20",
      textColor: "text-gray-800",
      activeColor: "bg-gray-500/10",
    },
    white: {
      bgColor: "bg-white/20",
      textColor: "text-white",
    },
    orange: {
      bgColor: "bg-orange-500/20",
      textColor: "text-orange-800",
      activeColor: "bg-orange-500/10",
    },
    pink: {
      bgColor: "bg-pink-500/20",
      textColor: "text-pink-500",
    },
    teal: {
      bgColor: "bg-teal-500/20",
      textColor: "text-teal-500",
    },
    cyan: {
      bgColor: "bg-cyan-500/20",
      textColor: "text-cyan-500",
    },
  };

  return colors[color || "blue"];
}
