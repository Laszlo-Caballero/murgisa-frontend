import cx from "@/libs/cx";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

export default function Checkbox({
  id,
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <div className={cx("flex items-center justify-center gap-x-2", className)}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
}
