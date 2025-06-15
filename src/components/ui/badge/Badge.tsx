import cx from "@/libs/cx";
import React, { PropsWithChildren } from "react";
interface BadgeProps {
  className?: string;
}

export default function Badge({
  children,
  className,
}: PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={cx(
        "px-2.5 py-0.5 rounded-full border border-gray-300 max-w-max text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}
