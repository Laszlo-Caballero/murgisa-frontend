import { Link } from "@/interfaces/links.interface";
import { FiHome } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { LuType, LuUsers } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { LuUserCheck } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiWrenchBold } from "react-icons/pi";
import { MdOutlineShield } from "react-icons/md";
import { LuBriefcase } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineApartment } from "react-icons/ai";
import { TbBasketDown } from "react-icons/tb";
import { MdOutlineAssignment } from "react-icons/md";
import { LiaSitemapSolid } from "react-icons/lia";
import { LuCar } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
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
        icono: <GoPlusCircle />,
        href: "/mantenimiento/agregarmantenimiento",
        label: "Agregar Tipo Mantenimiento",
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
  {
    titulo: "Recursos",
    color: "red",
    links: [
      {
        label: "Recursos",
        href: "/recurso",
        icono: <LiaSitemapSolid />,
      },
      {
        label: "Tipo de Recursos",
        href: "/tipo-recurso",
        icono: <LuType />,
      },
      {
        label: "Proovedor",
        href: "/proveedor",
        icono: <LuUsers />,
      },
    ],
  },
  {
    titulo: "Almacen",
    color: "pink",
    links: [
      {
        label: "Orden de Salida",
        href: "/nota-salida",
        icono: <LuCar />,
      },
      {
        label: "Orden de Entrada",
        href: "/orden/entrada",
        icono: <LuShoppingCart />,
      },
    ],
  },
];
