import Link from "next/link";
import { cloneElement, ReactElement, ReactNode } from "react";

interface Card404Props {
  icon: ReactNode;
  title: string;
  subtitle: string;
  url: string;
}

export default function Card404({ icon, title, subtitle, url }: Card404Props) {
  return (
    <Link
      href={url}
      className="flex justify-center w-full bg-white items-center rounded-lg flex-col gap-y-2 p-6 shadow-lg hover:shadow-2xl transition-all dark:bg-gray-700/50"
    >
      <div className="p-3 bg-blue-100 rounded-full dark:bg-blue-500/30">
        {cloneElement(icon as ReactElement<{ size: number; color: string}>, {
          size: 24,
          color: "#2563EB",
        })}
      </div>

      <h3 className="font-semibold text-slate-900 dark:text-slate-400 ">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
    </Link>
  );
}
