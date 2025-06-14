import cx from "@/libs/cx";
import {
  cloneElement,
  InputHTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  icon?: ReactNode;
  className?: string;
}

export default function Input({
  className,
  icon,
  id,
  label,
  ...props
}: InputProps) {
  const parseIcon = icon as ReactElement<{
    size?: number;
    color?: string;
    className?: string;
  }>;

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="w-full relative">
        {isValidElement(icon) &&
          cloneElement(parseIcon, {
            size: 20,
            className: cx(
              "absolute top-1/2 -translate-y-1/2 left-3 text-slate-500",
              parseIcon.props.className
            ),
            color: "#94A3B8",
          })}
        <input
          id={id}
          className={cx(
            "w-full px-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
