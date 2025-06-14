"use client";
import cx from "@/libs/cx";
import Link from "next/link";
import { cloneElement, ReactElement, useState } from "react";
import { links } from "@/data/links";
import { LuBuilding2 } from "react-icons/lu";
import { getColor } from "@/libs/getColor";
import { usePathname } from "next/navigation";
import { IoChevronForwardOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
export default function Aside() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={cx(
        "h-screen flex flex-col items-center sticky top-0 transition-all w-80"
      )}
    >
      <header className="flex items-center p-6 w-full bg-blue-700 text-white gap-x-2">
        <span className="bg-white size-10 rounded-lg flex items-center justify-center">
          <LuBuilding2 className="text-blue-700" size={25} />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-xl">MURGISA</p>
          <p className="text-sm">Panel de Control</p>
        </div>
      </header>

      <div className="px-4 pb-6 flex flex-col h-full w-full overflow-y-auto">
        {links.map((linkGroup, index) => {
          const color = getColor(linkGroup.color);

          return (
            <div
              className="flex flex-col w-full gap-y-3 border-b border-slate-500/30 py-4"
              key={index}
            >
              <span
                className={cx(
                  "px-2.5 py-0.5 text-xs rounded-full max-w-max font-semibold",
                  color.bgColor,
                  color.textColor
                )}
              >
                {linkGroup.titulo}
              </span>
              <div className="flex flex-col">
                {linkGroup.links.map((link, linkIndex) => {
                  const paseIcon = link.icono as ReactElement<{
                    className?: string;
                    size?: number;
                    color?: string;
                  }>;

                  return (
                    <Link
                      href={link.href}
                      key={linkIndex}
                      className={cx(
                        "flex items-center rounded-sm px-2 py-4 transition-colors",
                        pathName === link.href && color.activeColor
                      )}
                    >
                      <div className="flex items-center gap-x-6 w-full">
                        {cloneElement(paseIcon, {
                          className: cx(
                            pathName === link.href
                              ? color.textColor
                              : "text-gray-500"
                          ),
                          size: 15,
                        })}
                        <span
                          className={cx(
                            "text-sm font-medium",
                            pathName === link.href
                              ? color.textColor
                              : "text-gray-500"
                          )}
                        >
                          {link.label}
                        </span>
                      </div>
                      <IoChevronForwardOutline
                        size={15}
                        className={cx(
                          pathName === link.href
                            ? color.textColor
                            : "text-gray-500"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="w-full p-4 bg-gray-50 relative">
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-md">
          <div className="flex items-center">
            <span className="size-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
              A
            </span>
            <div className="ml-3">
              <p className="text-sm font-semibold">Administrador</p>
              <p className="text-xs text-gray-500">admin@gmail.com</p>
            </div>
          </div>

          <button onClick={() => setOpen(!open)}>
            <LuSettings
              size={20}
              className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              aria-label="Configuración"
            />
          </button>
        </div>

        {open && (
          <div className="absolute bottom-1/2 translate-y-1/2 left-full w-full translate-x-5 right-0 bg-white shadow-2xl">
            <Link
              href="/login"
              className="p-4 flex items-center gap-x-2 cursor-pointer"
            >
              <RiLogoutCircleRLine />
              Logout
            </Link>
          </div>
        )}
      </footer>
    </aside>
  );
}
