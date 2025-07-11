"use client";
import { LuSquarePen } from "react-icons/lu";

import cx from "@/libs/cx";
import { LuFilter } from "react-icons/lu";
import Table from "@/components/ui/table/Table";
import { LuCalendar } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { MantenimientoCorrectivo } from "@/interfaces/responsefinal.interface";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";
import { CorrectivoColumns } from "@/columns/CorrectivoColumns";

interface ListarCorrectivoProps {
  data: MantenimientoCorrectivo[];
}

export default function ListarCorrectivo({ data }: ListarCorrectivoProps) {
  return (
    <div className="py-3 flex w-full flex-col gap-y-4">
      <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
        <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
          <LuFilter size={20} className="text-orange-600" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500">
          Utiliza los filtros para encontrar mantenimientos solicitados de
          manera rápida
        </p>
      </section>

      <div className="flex flex-col  w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl dark:text-white">
            Mantenimientos Registrados
          </p>
          <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los mantenimiento correctivos registrados en el
            sistema{" "}
          </p>
        </div>
        {
          <Table
            className="mt-4 bg-white w-full rounded-md  "
            data={data}
            columns={CorrectivoColumns}
          ></Table>
        }
      </div>
    </div>
  );
}
