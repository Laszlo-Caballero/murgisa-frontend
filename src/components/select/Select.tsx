import cx from "@/libs/cx";
import { HTMLInputTypeAttribute, PropsWithChildren } from "react";

interface SelectProps {
  label: string;
  id: string;
  className?: string;
}

export default function Select({
  label,
  id,
  className,
  children,
}: PropsWithChildren<SelectProps>) {
  return (
    <div className={cx("flex flex-col w-[300px]", className)}>
      <label htmlFor={id} className="w-full">
        {label}
      </label>
      <select id={id} className="border w-full">
        {children}
      </select>
    </div>
  );
}
