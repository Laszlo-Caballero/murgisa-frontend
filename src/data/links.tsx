import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiCash } from "react-icons/hi";
import { GrHostMaintenance } from "react-icons/gr";
export const links: {
  icono: ReactNode;
  href: string;
  texto: string;
}[] = [
  {
    icono: <AiFillHome />,
    href: "/",
    texto: "Home",
  },
  {
    icono: <HiCash />,
    href: "/ventas",
    texto: "Ventas",
  },
  {
    icono: <HiCash />,
    href: "/ventas/listar",
    texto: "Ver Ventas",
  },
  {
    icono: <GrHostMaintenance />,
    href: "/mantenimiento/correctivo",
    texto: "Ver Mantenimiento Correctivo",
  },
  {
    icono: <GrHostMaintenance />,
    href: "/mantenimiento/preventivo",
    texto: "Ver Mantenimiento Preventivo",
  },
];
