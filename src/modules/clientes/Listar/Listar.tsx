"use client";
import Table from "@/components/ui/table/Table";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import cx from "@/libs/cx";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { Cliente } from "@/interfaces/responsefinal.interface";

interface ListarClientesProps {
  data?: Cliente[] | null;
}

export default function ListarClientes({ data }: ListarClientesProps) {
  return (
    <div className="py-3 flex w-full flex-col gap-y-4">
      <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
          <LuFilter className="size-5 text-blue-500 dark:text-blue-400" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
          Utiliza los filtros para encontrar clientes específicos de manera
          rápida
        </p>
      </div>

      <div className="flex flex-col  w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800 dark:border dark:border-gray-700 ">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl  dark:text-white ">
            Clientes Registrados
          </p>
          <Badge className="bg-gray-50 text-xs text-gray-600 font-bold border-gray-300 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
            Total: 5
          </Badge>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los clientes registrados en el sistema{" "}
          </p>
        </div>

        <Table
          className="mt-4"
          data={data ?? []}
          columns={[
            {
              header: "Cliente",
              cell: (props) => {
                return (
                  <div className="flex flex-col dark:text-gray-300">
                    <p className="font-medium">{props.row?.nombre}</p>
                    <p className="text-sm text-gray-500">
                      {props.row.razonSocial}
                    </p>
                    <p className="text-xs text-gray-500">
                      DNI: {props.row.dni}
                    </p>
                  </div>
                );
              },
            },
            {
              header: "Contacto",
              cell: (props) => {
                return (
                  <div className="flex flex-col dark:text-gray-400">
                    <span className="flex items-center gap-x-2">
                      <AiOutlineMail className="text-blue-400" />
                      <p className="text-sm">{props.row.correo}</p>
                    </span>

                    <span className="flex items-center gap-x-2">
                      <LuPhone className="text-green-400" />
                      <p className="text-sm">{props.row.telefono}</p>
                    </span>
                  </div>
                );
              },
            },
            {
              header: "Ubicación",
              cell: (props) => {
                return (
                  <div className="flex flex-col">
                    <span className="flex xl:flex-row flex-col items-center gap-x-2">
                      <HiOutlineLocationMarker className="text-red-500" />
                      <p className="text-sm text-nowrap dark:text-gray-400">
                        Ciudad: {props.row.ciudad?.nombre}
                      </p>
                    </span>
                    <p className="text-xs text-gray-500">
                      {props.row.direccion}
                    </p>
                  </div>
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
                    {props.row.estado ? "Activo" : "Inactivo"}
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
                    <LuTrash2 className="text-gray-900 dark:text-gray-400" />
                  </span>
                );
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
