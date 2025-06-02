import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiCash } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { MdHomeRepairService } from "react-icons/md";

import { GrVmMaintenance } from "react-icons/gr";
import { SiCashapp } from "react-icons/si";

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
    icono: <FaUser />,
    href: "/usuarios",
    texto: "Usuarios",
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
  {
    icono: <MdHomeRepairService />,
    href: "/servicios",
    texto: "Servicios",
  },
  {
    icono: <GrVmMaintenance />,
    href: "/mantenimiento/planificacion",
    texto: "Ver Planificacion de Mantenimiento",
  },
  {
    icono: <SiCashapp />,
    href: "/forma-pago",
    texto: "Formas de Pago",
  },
];
