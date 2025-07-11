"use client";

import cx from "@/libs/cx";
import { format, parse } from "date-fns";
import {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
interface InputDateProps {
  label?: string;
  id?: string;
  icon?: ReactNode;
  className?: string;
  classNameContainer?: string;
  error?: string;
  onChange?: (date: string) => void;
  value?: string;
  placeholder?: string;
}

export default function InputDate({
  label,
  id,
  icon,
  className,
  classNameContainer,
  error,
  onChange,
  value,
  placeholder,
}: InputDateProps) {
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
  console.log(value);
  return (
    <div
      className={cx("flex flex-col gap-y-2 cursor-pointer", classNameContainer)}
      ref={ref}
    >
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
        onClick={() => setOpen(!open)}
      >
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
        <div
          id={id}
          className={cx(
            "w-full px-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-500/40",
            className,
            error && "border-red-500 dark:border-red-500"
          )}
          onClick={() => setOpen(!open)}
        >
          <p className={cx(error && "dark:text-red-500")}>
            {value || placeholder}
          </p>
        </div>

        {open && (
          <div className="absolute bg-white dark:bg-slate-800 z-50 p-4 rounded-lg shadow-2xl">
            <DayPicker
              mode="single"
              locale={es}
              captionLayout="dropdown"
              navLayout="around"
              animate
              classNames={{
                dropdown: "bg-white dark:bg-slate-800",
                caption_label: "hidden",
                selected: "bg-blue-500 text-white rounded-full",
                today: "text-black dark:text-slate-300",
              }}
              selected={
                value ? parse(value, "yyyy-MM-dd", new Date()) : undefined
              }
              onSelect={(date) => {
                onChange?.(date ? date.toISOString().split("T")[0] : "");
              }}
            />
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
