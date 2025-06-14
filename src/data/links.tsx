import { Link } from "@/interfaces/links.interface";
import { FiHome } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { LuUserCheck } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiWrenchBold } from "react-icons/pi";
import { MdOutlineShield } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuBriefcase } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";
import { TbCash } from "react-icons/tb";
import { AiOutlineApartment } from "react-icons/ai";
import { TbBasketDown } from "react-icons/tb";
import { MdOutlineAssignment } from "react-icons/md";
export const links: Link[] = [
  {
    titulo: "Principal",
    color: "blue",
    links: [
      {
        label: "Home",
        href: "/",
        icono: <FiHome />,
      },
    ],
  },
  {
    titulo: "Ventas",
    color: "green",
    links: [
      {
        label: "Ventas",
        href: "/ventas",
        icono: <MdOutlineShoppingCart />,
      },
      {
        label: "Ver Ventas",
        href: "/ventas/listar",
        icono: <FiEye />,
      },
      {
        icono: <TbCash />,
        href: "/pago",
        label: "Ver Pagos",
      },
    ],
  },
  {
    titulo: "Administración",
    color: "gray",
    links: [
      {
        label: "Clientes",
        href: "/cliente",
        icono: <LuUsers />,
      },
      {
        label: "Formas de Pago",
        href: "/forma-pago",
        icono: <FiCreditCard />,
      },
      {
        label: "Personal",
        href: "/personal",
        icono: <LuUserCheck />,
      },
      {
        label: "Profesión",
        href: "/profesion",
        icono: <RiGraduationCapLine />,
      },
      {
        icono: <AiOutlineApartment />,
        href: "/departamento",
        label: "Departamento",
      },
      {
        icono: <TbBasketDown />,
        href: "/cargo",
        label: "Cargo",
      },
    ],
  },
  {
    titulo: "Mantenimiento",
    color: "orange",
    links: [
      {
        label: "Mantenimiento Correctivo",
        href: "/mantenimiento/correctivo",
        icono: <PiWrenchBold />,
      },
      {
        label: "Mantenimiento Preventivo",
        href: "/mantenimiento/preventivo",
        icono: <MdOutlineShield />,
      },
      {
        label: "Planificación de Mantenimiento",
        href: "/mantenimiento/planificacion",
        icono: <MdOutlineCalendarToday />,
      },
      {
        icono: <GoPlusCircle />,
        href: "/mantenimiento/agregarmantenimiento",
        label: "Agregar Tipo Mantenimiento",
      },
      {
        icono: <FiEye />,
        href: "/mantenimiento/veragregarman",
        label: "Ver Tipos de Mantenimiento",
      },
    ],
  },
  {
    titulo: "Servicios",
    color: "purple",
    links: [
      {
        label: "Servicios",
        href: "/servicios",
        icono: <LuBriefcase />,
      },
      {
        label: "Orden de Servicio",
        href: "/orden-servicio",
        icono: <MdOutlineAssignment />,
      },
      {
        label: "Ver Condición",
        href: "/condicion",
        icono: <LuCircleCheckBig />,
      },
    ],
  },
];
