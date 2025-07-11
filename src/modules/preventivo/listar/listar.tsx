"use client";
import {
  LuFilter,
  LuCalendar,
  LuUsers,
  LuSquarePen,
  LuTrash2,
  LuShield,
} from "react-icons/lu";
import { PlanificacionPreventivo } from "@/interfaces/response.interface";
import Badge from "@/components/ui/badge/Badge";
import Table from "@/components/ui/table/Table";
import { MantenimientoPreventivo } from "@/interfaces/responsefinal.interface";

interface ListarPreventivosProps {
  data: MantenimientoPreventivo[];
}

export default function ListarPreventivos({ data }: ListarPreventivosProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      {/* Filtros */}
      <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        <span className="flex items-center gap-x-2 font-semibold text-black dark:text-white text-lg">
          <LuFilter size={20} className="text-orange-600" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
          Utiliza los filtros para encontrar mantenimientos programados de
          manera rápida
        </p>
      </section>

      {/* Lista de mantenimientos */}
      <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium text-black dark:text-white text-xl">
              Mantenimientos Registrados
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
              Gestiona todos los mantenimientos programados
            </p>
          </div>
          <div>
            <span className="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 text-xs text-gray-600 font-semibold border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1">
              Total: {data?.length}
            </span>
          </div>
        </div>

        <Table
          className="mt-4 bg-white w-full rounded-md"
          data={data}
          columns={[
            {
              header: "Mantenimiento",
              cell: (props) => (
                <div className="flex items-start gap-x-3">
                  <span className="bg-red-100 dark:bg-red-500/20 p-2 rounded-lg">
                    <LuShield size={15} className="text-orange-600" />
                  </span>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-3 gap-2">
                      {props.row?.tipo?.map((tipo, index) => {
                        return <Badge key={index}>{tipo.nombre}</Badge>;
                      })}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      ID: PLAN-00{props.row?.mantenimientoPreventivoId}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              header: "Fecha Programada",
              cell: (props) => (
                <div className="flex flex-col gap-y-1">
                  <span className="flex items-center gap-x-2">
                    <LuCalendar size={15} className="text-blue-500" />
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {new Date(
                        props.row?.fechaMantenimiento
                      ).toLocaleDateString("es-ES")}
                    </p>
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {props.row?.horario?.horaInicio}
                  </p>
                </div>
              ),
            },
            {
              header: "Responsable",
              cell: (props) => (
                <div className="flex flex-col gap-y-1 text-center xl:text-start">
                  <span className="flex xl:flex-row flex-col items-center gap-x-2">
                    <LuUsers size={15} className="text-green-500" />
                    <span className="text-sm font-semibold text-black dark:text-white text-nowrap">
                      {props.row?.personal?.apellido_paterno}
                    </span>
                  </span>
                </div>
              ),
            },
            {
              header: "Recurso",
              cell: (props) => (
                <span className="text-sm text-black dark:text-white">
                  {props.row?.recurso?.nombre}
                </span>
              ),
            },
            {
              header: "Prioridad",
              cell: (props) => (
                <Badge className="bg-yellow-100 border-yellow-300 text-yellow-700 font-semibold dark:bg-yellow-500/20 dark:border-yellow-400 dark:text-yellow-300">
                  Media
                </Badge>
              ),
            },
            {
              header: "Estado",
              cell: (props) => (
                <Badge className="bg-green-100 border-green-300 text-green-700 font-semibold dark:bg-green-500/20 dark:border-green-400 dark:text-green-300">
                  Activo
                </Badge>
              ),
            },
            {
              header: "Acciones",
              cell: (props) => (
                <span className="flex items-center gap-x-4">
                  <LuSquarePen className="text-red-500" />
                  <LuTrash2 className="text-gray-900 dark:text-gray-300" />
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
