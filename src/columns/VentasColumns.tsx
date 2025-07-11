"use client";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";
import Badge from "@/components/ui/badge/Badge";
import { Venta } from "@/interfaces/responsefinal.interface";
import { ColumnDef } from "@/interfaces/table.interface";
import cx from "@/libs/cx";
import PersonalModal from "@/modules/ventas/detalles/Personal";
import Recursos from "@/modules/ventas/detalles/Recursos";
import Servicios from "@/modules/ventas/detalles/Servicios";
import { CiDollar } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import {
  LuBriefcase,
  LuCalendar,
  LuSquarePen,
  LuTrash2,
  LuWrench,
} from "react-icons/lu";

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
              ID: VENT-00{props.row?.idVenta}
            </span>
            <span className="font-semibold text-gray-800 text-sm dark:text-gray-300">
              {props.row?.cliente?.nombre} {props.row?.cliente?.razonSocial}{" "}
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
          <p className="text-nowrap dark:text-gray-200">
            {props.row?.fechaVenta?.split("T")[0]}
          </p>
        </div>
      );
    },
  },
  {
    header: "Item/Monto",
    cell: (props) => {
      const totalDetalle = props.row?.detalleVenta?.reduce(
        (total, item) => total + item.precio,
        0
      );

      const totalServicio = props.row?.servicios?.reduce(
        (total, item) => total + item.precio,
        0
      );

      const totalPersonal = props.row?.asignacionPersonal?.reduce(
        (total, item) => total + item.costo,
        0
      );

      const total = totalDetalle + totalServicio + totalPersonal;

      return (
        <div className="flex items-center xl:items-start flex-col gap-y-2">
          <span className="flex items-center gap-x-2">
            <CiDollar className="text-green-600 dark:text-green-400" />
            <p className="text-green-600 text-sm dark:text-green-400">
              {total}
            </p>
          </span>
        </div>
      );
    },
  },
  {
    header: "Servicios",
    cell: (props) => {
      return (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <LuBriefcase
              size={15}
              className="text-blue-600 dark:text-blue-400"
            />
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {props.row?.detalleVenta?.length || 0} servicios
            </span>
          </div>
          <Servicios servicios={props.row?.servicios || []} />
        </div>
      );
    },
  },
  {
    header: "Recursos",
    cell: (props) => {
      return (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <LuWrench size={15} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {props.row?.detalleVenta?.length || 0} recursos
            </span>
          </div>
          <Recursos
            recursosData={
              props.row?.detalleVenta?.map((item) => item.recurso) || []
            }
          />
        </div>
      );
    },
  },
  {
    header: "Personal",
    cell: (props) => {
      return (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <LuSquarePen
              size={15}
              className="text-purple-600 dark:text-purple-400"
            />
            <span className="text-sm text-gray-800 dark:text-gray-300">
              {props.row?.detalleVenta?.length || 0} Personal
            </span>
          </div>
          <PersonalModal
            personal={
              props.row?.asignacionPersonal?.map((p) => p.personal) || []
            }
          />
        </div>
      );
    },
  },
  {
    header: "Estado",
    cell: (props) => {
      return (
        <Badge
          className={cx(
            "bg-green-100 text-green-800 border-green-300 font-semibold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
            props.row?.estado
              ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
              : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700"
          )}
        >
          {props.row?.estado ? "Concretada" : "Anulada"}
        </Badge>
      );
    },
  },
  {
    header: "Metodo de Pago",
    cell: (props) => {
      const forma = props.row?.pagos
        .map((pago) => pago.formaPago.tipo)
        .join(", ");
      return (
        <Badge
          className={cx(
            "bg-purple-100 text-purple-800 border-purple-300 font-semibold dark:bg-purple-500/30 dark:text-purple-300 dark:border-purple-700"
          )}
        >
          {forma}
        </Badge>
      );
    },
  },
  {
    header: "Acciones",
    cell: (props) => {
      return (
        <span className="flex items-center gap-x-4">
          <DeleteModal id={props.row?.idVenta} endpoint="venta" />
        </span>
      );
    },
  },
];
