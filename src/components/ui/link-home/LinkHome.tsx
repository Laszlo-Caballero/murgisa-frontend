import cx from "@/libs/cx";
import Link from "next/link";
import React, { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
interface LinkHomeProps {
  href: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  className?: {
    container?: string;
    icon?: string;
  };
}

export default function LinkHome({
  href,
  icon,
  title,
  description,
  className,
}: LinkHomeProps) {
  return (
    <Link
      href={href}
      className={cx(
        `p-4 items-center gap-2 flex bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200`,
        className?.container
      )}
    >
      <div
        className={cx(
          "size-8 rounded-full mr-3 flex items-center justify-center",
          className?.icon
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{title}</span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>

      <div className="ml-auto">
        <LuArrowRight size={18} />
      </div>
    </Link>
  );
}
