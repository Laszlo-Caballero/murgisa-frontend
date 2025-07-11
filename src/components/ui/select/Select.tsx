"use client";
import cx from "@/libs/cx";
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
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
  onChange?: (value: Options) => void;
  value?: Options;
  placeholder?: string;
  error?: string;
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
  error,
}: SelectProps) {
  const parseIcon = icon as ReactElement<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col relative gap-y-2 cursor-pointer" ref={ref}>
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
              "absolute top-1/2 -translate-y-1/2 left-3 text-slate-500 z-10",
              parseIcon.props.className
            ),
            color: "#94A3B8",
          })}
        <div
          id={id}
          className={cx(
            "w-full  py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-500/40",
            icon ? "px-10" : "px-4",
            className,
            error &&
              "border-red-500 dark:border-red-500 text-red-500 dark:text-red-500"
          )}
        >
          {value?.label || placeholder}
        </div>
      </div>
      {open && (
        <div className="absolute max-h-[50px] md:max-h-[150px] overflow-y-scroll top-full flex flex-col gap-y-2 left-0 translate-y-2 w-full bg-white border border-slate-300 rounded-md shadow-lg z-10 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-500 ">
          {options?.map((option) => {
            return (
              <div
                className="w-full px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                key={option.value}
                onClick={() => {
                  onChange?.(option);
                  setOpen(false);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
