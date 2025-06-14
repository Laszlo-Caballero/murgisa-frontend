import cx from "@/libs/cx";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  description?: string;
  className?: {
    container?: string;
    text?: {
      container?: string;
      title?: string;
      description?: string;
      extra?: string;
    };
    icon?: string;
  };
  extra?:string;
}

export default function Card({
  icon,
  title,
  description,
  className,
  extra,
}: CardProps) {
  return (
    <div
      className={cx(
        "p-6 w-full h-full rounded-lg shadow-sm bg-white flex items-center justify-between",
        className?.container
      )}
    >
      <div className={cx("flex flex-col", className?.text?.container)}>
        <p
          className={cx(
            "text-sm font-medium text-gray-600",
            className?.text?.title
          )}
        >
          {title}
        </p>
        <p
          className={cx(
            "text-2xl font-bold text-gray-900",
            className?.text?.description
          )}
        >
          {description}
        </p>
        <p
          className={cx(
            "text-xs font-small text-gray-600 mt-1",
            className?.text?.extra
          )}
        >
          {extra}
        </p>
      </div>
      <div className={className?.icon}>{icon}</div>
    </div>
  );
}
