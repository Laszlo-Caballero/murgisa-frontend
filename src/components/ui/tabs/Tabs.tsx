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
      <div className="p-1 bg-gray-300/20 dark:bg-gray-700/30 rounded-sm flex items-center">
        {headers.map((header, index) => (
          <button
            key={index}
            className={cx(
              "py-1 px-4 rounded-sm w-full cursor-pointer font-medium text-sm transition",
              activeTab === index
                ? "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
            onClick={() => setActiveTab(index)}
          >
            {header}
          </button>
        ))}
      </div>

    
      <div className="mt-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md p-4 shadow">
        {Children.map(children, (child, index) => {
          return index === activeTab ? child : null;
        })}
      </div>
    </div>
  );
}

