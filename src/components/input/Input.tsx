import cx from "@/libs/cx";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  className?: string;
}

export default function Input({
  label,
  type = "text",
  id,
  className,
}: InputProps) {
  return (
    <div className={cx("flex flex-col", className)}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
}
