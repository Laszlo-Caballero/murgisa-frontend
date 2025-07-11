"use client";
import {
  LuGraduationCap,
  LuUsers,
  LuSquarePen,
  LuTrash2,
} from "react-icons/lu";
import cx from "@/libs/cx";
import { ColumnDef } from "@/interfaces/table.interface";
import { Profesion } from "@/interfaces/responsefinal.interface";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import ActualizarProfesion from "@/modules/profesion/actualizar/ActualizarProfesion";

export const ProfesionColumns: ColumnDef<Profesion>[] = [
  {
    header: "Profesión",
    cell: (props) => (
      <div className="flex items-start gap-x-3 dark:text-gray-300">
        <span className="bg-blue-100 p-2 rounded-xl dark:bg-blue-500/30">
          <LuGraduationCap
            size={15}
            className="text-blue-600 dark:text-blue-400"
          />
        </span>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">{props.row.titulo}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            ID: PROF-00{props.row.idProfesion}
          </p>
        </div>
      </div>
    ),
  },
  {
    header: "Descripción ",
    cell: (props) => (
      <p className="text-xs text-gray-600 dark:text-gray-400">
        {props.row.descripcion}
      </p>
    ),
  },
  {
    header: "Personal",
    cell: (props) => (
      <div className="flex items-center gap-x-2">
        <LuUsers size={15} className="text-gray-500 dark:text-gray-400" />
        <span className="text-sm font-bold dark:text-gray-300">2</span>
        <p className="text-xs text-gray-500 dark:text-gray-400">empleados</p>
      </div>
    ),
  },
  {
    header: "Estado",
    cell: (props) => (
      <span
        className={cx(
          `px-2 py-1 rounded-full text-xs`,
          props.row.estado
            ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
            : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700"
        )}
      >
        {props.row.estado ? "Activo" : "Inactivo"}
      </span>
    ),
  },
  {
    header: "Acciones",
    cell: (props) => (
      <span className="flex items-center gap-x-4">
        <ButtonModal
          modal={<ActualizarProfesion id={props.row?.idProfesion} />}
          className="p-0 bg-transparent"
        >
          <LuSquarePen className="text-red-500" />
        </ButtonModal>
        <DeleteModal id={props.row?.idProfesion} endpoint="profesion">
          <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
        </DeleteModal>
      </span>
    ),
  },
];
