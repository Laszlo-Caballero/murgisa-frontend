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
      className="flex justify-center w-full h-full text-center bg-white items-center rounded-lg flex-col gap-y-2 p-6 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="p-3 bg-blue-100 rounded-full">
        {cloneElement(icon as ReactElement<{ size: number; color: string }>, {
          size: 24,
          color: "#2563EB",
        })}
      </div>

      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{subtitle}</p>
    </Link>
  );
}
