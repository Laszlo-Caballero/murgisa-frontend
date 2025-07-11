"use client";
import { Proveedor } from "@/interfaces/responsefinal.interface";
import Table from "@/components/ui/table/Table";
import Badge from "@/components/ui/badge/Badge";

import {
  LuUser,
  LuBuilding,
  LuFilter,
  LuMail,
  LuCalendar,
  LuSquarePen,
  LuTrash2,
} from "react-icons/lu";
import { ProveedorColumns } from "@/columns/ProveedorColumns";

interface ListarProveedorProps {
  data: Proveedor[];
}

export default function ListarProveedor({ data }: ListarProveedorProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      {/* Filtros */}
      <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700">
        <span className="flex items-center gap-x-2 font-semibold text-lg">
          <LuFilter size={20} className="text-red-600 dark:text-red-400" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
          Utiliza los filtros para encontrar proveedores específicos de manera
          rápida
        </p>
      </section>

      {/* Lista de proveedores */}
      <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-xl">Proveedores Registrados</p>
          <span className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 font-semibold border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1">
            Total: 5
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
          Gestiona todos los proveedores registrados en el sistema
        </p>

        <Table
          className="mt-4 bg-white dark:bg-gray-800 w-full rounded-md"
          data={data}
          columns={ProveedorColumns}
        />
      </div>
    </div>
  );
}
