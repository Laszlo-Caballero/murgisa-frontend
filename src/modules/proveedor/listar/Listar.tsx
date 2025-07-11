"use client";
import { Proveedor } from "@/interfaces/response.interface";
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
          columns={[
            {
              header: "Profesion",
              cell: (props) => (
                <div className="flex xl:flex-row flex-col items-center lg:items-start gap-x-3">
                  <span className="bg-red-100 dark:bg-red-500/10 p-2 rounded-lg">
                    <LuBuilding
                      size={15}
                      className="text-red-600 dark:text-red-400"
                    />
                  </span>
                  <div className="flex flex-col gap-y-1 text-center lg:text-start">
                    <p className="font-semibold text-nowrap">
                      {props.row.razSocial}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      RUC: {props.row.ruc}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      ID: PROV-00{props.row.idProveedor}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              header: "Responsable",
              cell: (props) => (
                <div className="flex flex-col gap-y-1">
                  <span className="flex items-center gap-x-2">
                    <LuUser size={15} className="text-black dark:text-white" />
                    <p className="font-semibold">{props.row.responsable}</p>
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    DNI: {props.row.dni}
                  </p>
                  <span className="flex items-center gap-x-2">
                    <LuMail
                      size={15}
                      className="text-yellow-600 dark:text-yellow-400"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {props.row.email}
                    </p>
                  </span>
                </div>
              ),
            },
            {
              header: "Tipo Recurso",
              cell: (props) => (
                <Badge className="bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 font-semibold">
                  {props.row.tipoRecurso}
                </Badge>
              ),
            },
            {
              header: "Última Compra",
              cell: (props) => (
                <div className="flex flex-col gap-y-1">
                  <span className="flex items-center gap-x-2">
                    <LuCalendar
                      size={15}
                      className="text-blue-500 dark:text-blue-300"
                    />
                    <p className="text-sm font-semibold">
                      {new Date(props.row.ultimaCompra).toLocaleDateString(
                        "es-ES"
                      )}
                    </p>
                  </span>
                </div>
              ),
            },
            {
              header: "Estado",
              cell: () => (
                <Badge className="bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 font-semibold">
                  Activo
                </Badge>
              ),
            },
            {
              header: "Acciones",
              cell: () => (
                <span className="flex items-center gap-x-4">
                  <LuSquarePen className="text-red-500" />
                  <LuTrash2 className="text-gray-900 dark:text-gray-400" />
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
