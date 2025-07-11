"use client";
import Badge from "@/components/ui/badge/Badge";
import { Venta } from "@/interfaces/response.interface";
import { ColumnDef } from "@/interfaces/table.interface";
import { CiDollar } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import { LuBriefcase, LuCalendar, LuSquarePen, LuTrash2 } from "react-icons/lu";

export const VentasColumns: ColumnDef<Venta>[] = [
  {
    header: "Venta ID",
    cell: (props) => {
      return (
        <div className="flex items-center gap-x-2">
          <span className="bg-blue-100 rounded-lg p-2 dark:bg-blue-500/30">
            <IoDocumentOutline className="text-blue-900 dark:text-blue-400" />
          </span>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray-500 text-xs dark:text-gray-400">
              ID: VENT-00{props.row.idVenta}
            </span>
            <span className="font-semibold text-gray-800 text-sm dark:text-gray-300">
              {props.row.cliente}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    header: "Fecha",
    cell: (props) => {
      return (
        <div className="flex xl:flex-row flex-col items-center gap-x-2">
          <LuCalendar size={15} className="text-red-600 dark:text-red-500" />
          <p className="text-nowrap dark:text-gray-200">{props.row.fecha}</p>
        </div>
      );
    },
  },
  {
    header: "Item/Monto",
    cell: (props) => {
      return (
        <div className="flex items-center xl:items-start flex-col gap-y-2">
          <span className="flex xl:flex-row flex-col items-center gap-x-2">
            <LuBriefcase className="text-gray-800 dark:text-gray-300" />
            <p className="text-gray-800 text-sm text-nowrap dark:text-gray-300">
              {props.row.recurso}
            </p>
          </span>
          <span className="flex items-center gap-x-2">
            <CiDollar className="text-green-600 dark:text-green-400" />
            <p className="text-green-600 text-sm dark:text-green-400">
              {props.row.monto}
            </p>
          </span>
        </div>
      );
    },
  },
  {
    header: "Estado",
    cell: (props) => {
      return (
        <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700">
          Activo
        </Badge>
      );
    },
  },
  {
    header: "Acciones",
    cell: (props) => {
      return (
        <span className="flex items-center gap-x-4">
          <LuSquarePen className="text-red-500" />
          <LuTrash2 className="text-gray-900 dark:text-gray-400" />
        </span>
      );
    },
  },
];
