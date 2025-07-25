"use client";
import cx from "@/libs/cx";
import { PropsWithChildren, ReactNode } from "react";

interface CardInfoProps {
  icon: ReactNode;
  title: string;
  span?: string;
  description: string;
  className?: {
    container?: string;
    header?: {
      container?: string;
      title?: string;
      description?: string;
      icon?: string;
    };
    children?: string;
    span?: string;
  };
  onClick?: () => void;
}

export default function CardInfo({
  description,
  icon,
  title,
  children,
  span,
  className,
  onClick,
}: PropsWithChildren<CardInfoProps>) {
  return (
    <div
      className={cx(
        "flex w-full flex-col rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 p-6 gap-y-3 dark:hover:shadow-gray-800/40",
        className?.container
      )}
      onClick={onClick}
    >
      <header
        className={cx("flex flex-col gap-y-2", className?.header?.container)}
      >
        <div className="flex items-center  gap-y-2 w-full justify-between">
          <span className="flex items-center gap-x-2.5">
            <div className={cx("p-2 rounded-full", className?.header?.icon)}>
              {icon}
            </div>
            <p
              className={cx("text-lg font-semibold", className?.header?.title)}
            >
              {title}
            </p>
          </span>
          <span
            className={cx(
              "px-2.5 py-1 rounded-full text-xs font-medium",
              className?.span
            )}
          >
            {span}
          </span>
        </div>
        <p
          className={cx(
            "text-sm text-gray-500",
            className?.header?.description
          )}
        >
          {description}
        </p>
      </header>
      <div className={cx("flex flex-col w-full", className?.children)}>
        {children}
      </div>
    </div>
  );
}
