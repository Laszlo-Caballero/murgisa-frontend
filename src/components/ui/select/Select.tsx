import cx from "@/libs/cx";
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
type Options = {
  value: string;
  label: string | ReactNode;
};

interface SelectProps {
  label?: string;
  id?: string;
  icon?: ReactNode;
  className?: string;
  options?: Options[];
  onChange?: (value: string) => void;
  value?: Options;
  placeholder?: string;
}
export default function Select({
  className,
  icon,
  id,
  label,
  onChange,
  options,
  value,
  placeholder,
}: SelectProps) {
  const parseIcon = icon as ReactElement<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col relative gap-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {label}
      </label>
      <div
        className="w-full relative"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {isValidElement(icon) &&
          cloneElement(parseIcon, {
            size: 20,
            className: cx(
              "absolute top-1/2 -translate-y-1/2 left-3 text-slate-500",
              parseIcon.props.className
            ),
            color: "#94A3B8",
          })}
        <div
          id={id}
          className={cx(
            "w-full  py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-500/40",
            icon ? "px-10" : "px-4",
            className
          )}
        >
          {value?.label || placeholder}
        </div>
      </div>
      {open && (
        <div className="absolute top-full flex flex-col gap-y-2 left-0 translate-y-2 w-full bg-white border border-slate-300 rounded-md shadow-lg z-10 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-500 ">
          {options?.map((option) => {
            return (
              <div
                className="w-full px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                key={option.value}
                onClick={() => {
                  onChange?.(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
