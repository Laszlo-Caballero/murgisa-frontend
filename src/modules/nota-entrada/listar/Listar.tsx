"use client";
import { LuFilter } from "react-icons/lu";

import Badge from "@/components/ui/badge/Badge";
import Table from "@/components/ui/table/Table";
import { LuCar } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { PiMoneyWavy } from "react-icons/pi";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import cx from "@/libs/cx";
import { NotaEntrada } from "@/interfaces/responsefinal.interface";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

interface ListarNotaEntradaProps {
  data: NotaEntrada[];
}

export default function ListarNotaEntrada({ data }: ListarNotaEntradaProps) {
  return (
    <div className="py-3 flex w-full flex-col gap-y-4">
      <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
        <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
          <LuFilter size={20} className="text-pink-600" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500">
          Utiliza los filtros para encontrar notas de entrada programadas de
          manera rápida
        </p>
      </section>

      <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl dark:text-white">
            Notas Registradas
          </p>
          <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos las notas registradas en el sistema
          </p>
        </div>

        {
          <Table
            className="mt-4 bg-white w-full rounded-md "
            data={data}
            columns={[
              {
                header: "Nota Entrada",
                cell: (props) => {
                  return (
                    <div className="flex flex-col xl:flex-row items-center gap-x-2 lg:text-start text-center">
                      <span className="bg-pink-200 p-2 rounded-lg">
                        <LuCar className="text-pink-700"></LuCar>
                      </span>
                      <div>
                        <p className="font-semibold text-nowrap">
                          ID: NE-00{props.row?.idNotaEntrada}
                        </p>
                        <p className="text-xs text-gray-500">
                          Fecha: {props.row?.fecha}
                        </p>
                      </div>
                    </div>
                  );
                },
              },
              {
                header: "Proveedor",
                cell: (props) => {
                  return (
                    <div className="flex xl:flex-row flex-col items-center gap-x-4">
                      <LuBuilding2 className="text-blue-600" />
                      <div className="flex flex-col gap-y-1 text-center xl:text-start">
                        <p className="font-semibold text-nowrap">
                          {props.row?.proveedor?.razonSocial}
                        </p>
                        <p className="text-sm text-gray-500">
                          Ruc: {props.row?.proveedor?.ruc}
                        </p>
                      </div>
                    </div>
                  );
                },
              },
              {
                header: "Recurso",
                cell: (props) => {
                  return (
                    <div className="flex items-center gap-x-4">
                      <LuPackage className="text-gray-600" />
                      <Badge className="bg-ywllow-100 text-blue-700 font-semibold border-pin">
                        {props.row?.recurso?.nombre}
                      </Badge>
                    </div>
                  );
                },
              },
              {
                header: "Cantidad",
                cell: (props) => {
                  return (
                    <span className="flex items-center gap-x-3">
                      <LuPackage className="text-purple-600" />
                      <p className="text-gray-500 text-nowrap">
                        Producto: {props.row?.cantidad}
                      </p>
                    </span>
                  );
                },
              },
              {
                header: "Monto",
                cell: (props) => {
                  return (
                    <span className="flex xl:flex-row flex-col items-center gap-x-3">
                      <PiMoneyWavy className="text-green-600" />
                      <p className="text-green-600 font-semibold text-nowrap">
                        S/. {props.row?.monto}
                      </p>
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
                      <DeleteModal
                        id={props.row?.idNotaEntrada}
                        endpoint="nota-entrada"
                      >
                        <LuTrash2 className="text-gray-900 dark:text-gray-400" />
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
