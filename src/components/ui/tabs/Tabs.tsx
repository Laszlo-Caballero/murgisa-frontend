"use client";

import cx from "@/libs/cx";
import { Children, ReactNode, useState } from "react";

interface TabsProps {
  headers: string[];
  children: ReactNode;
  className?: string;
}

export default function Tabs({ headers, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cx("flex flex-col w-full", className)}>
      <div className="p-1 bg-gray-300/20 rounded-sm flex items-center dark:bg-gray-800">
        {headers.map((header, index) => (
          <button
            key={index}
            className={cx(
              `py-1 px-4 rounded-sm w-full cursor-pointer font-medium text-sm`,
              activeTab === index ? "bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-300" : "text-gray-600 "
            )}
            onClick={() => setActiveTab(index)}
          >
            {header}
          </button>
        ))}
      </div>
      {Children.map(children, (child, index) => {
        return index === activeTab ? child : null;
      })}
    </div>
  );
}
