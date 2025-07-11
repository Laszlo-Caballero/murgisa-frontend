import { Link } from "@/interfaces/links.interface";
import { FiHome } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuType, LuUsers } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiWrenchBold } from "react-icons/pi";
import { MdOutlineShield } from "react-icons/md";
import { LuBriefcase } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LiaSitemapSolid } from "react-icons/lia";
import { LuCar } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { PiToolbox } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { GrVmMaintenance } from "react-icons/gr";

export const links: Link[] = [
  {
    titulo: "Principal",
    color: "gray",
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
    color: "blue",
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
        icono: <GrUserWorker />,
      },
      {
        label: "Profesión",
        href: "/profesion",
        icono: <RiGraduationCapLine />,
      },
      {
        icono: <LuBuilding2 />,
        href: "/departamento",
        label: "Departamento",
      },
      {
        icono: <PiToolbox />,
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
        icono: <LuSettings />,
        href: "/mantenimiento/agregarmantenimiento",
        label: "Agregar Tipo Mantenimiento",
      },
      // {
      //   label: "Pedido Reemplazo",
      //   href: "/mantenimiento/pedido-reemplazo",
      //   icono: <GrVmMaintenance />,
      // },
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
        label: "Tipo de Servicio",
        href: "/tipo-servicio",
        icono: <LuLayers />,
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
        icono: <LuPackage />,
      },
      {
        label: "Tipo de Recursos",
        href: "/tipo-recurso",
        icono: <LuLayers />,
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
        label: "Nota de Salida",
        href: "/nota-salida",
        icono: <LuCar />,
      },
      {
        label: "Nota de Entrada",
        href: "/orden/entrada",
        icono: <LuShoppingCart />,
      },
    ],
  },
];
