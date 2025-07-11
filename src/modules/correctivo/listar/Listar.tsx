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
            columns={[
              {
                header: "Mantenimiento",
                cell: (props) => {
                  return (
                    <div className="flex items-start gap-x-3">
                      <span className="bg-red-100 p-2 rounded-lg">
                        <LuWrench size={15} className="text-orange-600" />
                      </span>
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">
                          {props.row?.tipo
                            ?.map((tipo) => tipo?.nombre)
                            .join(", ")}
                        </p>
                        <p className="text-xs text-gray-600">
                          ID: CORR-00{props.row?.mantenimientoCorrectivoId}
                        </p>
                      </div>
                    </div>
                  );
                },
              },
              {
                header: "Responsable",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-1 text-center xl:text-start">
                      <span className="flex xl:flex-row flex-col items-center gap-x-2">
                        <LuUsers size={15} className="text-green-500" />
                        <span className="text-sm font-semibold text-nowrap">
                          {props.row?.personal?.nombre}
                        </span>
                      </span>
                      <span>
                        <p className="text-xs text-gray-600"> {1} técnicos</p>
                      </span>
                    </div>
                  );
                },
              },
              {
                header: "Fecha Programada",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-1">
                      <span className="flex items-center gap-x-2">
                        <LuCalendar size={15} className="text-blue-500" />
                        <p className="text-sm font-semibold">
                          {" "}
                          {new Date(props.row?.fechaInicio).toLocaleDateString(
                            "es-ES"
                          )}
                        </p>
                      </span>
                    </div>
                  );
                },
              },
              {
                header: "Maquinaria",
                cell: (props) => {
                  return (
                    <span className="text-sm">
                      {props.row?.recurso?.nombre}
                    </span>
                  );
                },
              },
              {
                header: "Estado",
                cell: (props) => {
                  return (
                    <span
                      className={cx(
                        `px-2 py-1 rounded-full text-xs`,
                        props.row.estado
                          ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
                          : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700"
                      )}
                    >
                      {props.row?.estado ? "Activo" : "Inactivo"}
                    </span>
                  );
                },
              },
              {
                header: "Acciones",
                cell: (props) => {
                  return (
                    <span className="flex items-center gap-x-4">
                      <LuSquarePen className="text-red-500" />
                      <DeleteModal
                        id={props.row?.mantenimientoCorrectivoId}
                        endpoint="mantenimiento-correctivo"
                      >
                        <LuTrash2 className="text-gray-900 dark:text-gray-300" />
                      </DeleteModal>
                    </span>
                  );
                },
              },
            ]}
          ></Table>
        }
      </div>
    </div>
  );
}
