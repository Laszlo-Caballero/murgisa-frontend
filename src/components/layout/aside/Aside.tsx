"use client";
import cx from "@/libs/cx";
import Link from "next/link";
import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { links } from "@/data/links";
export default function Aside() {
  const [open, setOpen] = useState(false);
  const refAside = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refAside.current &&
        !refAside.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      className={cx(
        "h-screen bg-blue-300 flex flex-col items-center transition-all text-white",
        open ? "w-64" : "w-16"
      )}
      ref={refAside}
    >
      <button className="p-2 text-white" onClick={() => setOpen(!open)}>
        <MdOutlineMenu size={30} />
      </button>

      {links.map((links, index) => {
        return (
          <Link
            key={index}
            href={links.href}
            className={cx(
              "flex items-center p-2 w-full hover:bg-blue-400 transition-colors",
              !open && "justify-center"
            )}
          >
            {cloneElement(links.icono as ReactElement<{ size: number }>, {
              size: 20,
            })}
            {open && <span className="ml-2">{links.texto}</span>}
          </Link>
        );
      })}
    </aside>
  );
}
