"use client";
import Table from "@/components/ui/table/Table";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import cx from "@/libs/cx";
import { Cliente } from "@/interfaces/response.interface";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import TableSkeleton from "@/components/skeletons/table-skeleton/TableSkeleton";

interface ListarClientesProps {
  data?: Cliente[];
  isLoading?: boolean;
}

export default function ListarClientes({
  data,
  isLoading,
}: ListarClientesProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
        <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
          <LuFilter className="text-blue-500 size-5" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500">
          Utiliza los filtros para encontrar clientes específicos de manera
          rápida
        </p>
      </div>

      <div className="flex flex-col  w-full rounded-md shadow-md p-4 bg-white">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl">Clientes Registrados</p>
          <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los clientes registrados en el sistema{" "}
          </p>
        </div>

        {isLoading ? (
          <TableSkeleton columns={5} rows={5} className="mt-4" />
        ) : (
          <Table
            className="mt-4"
            data={data ?? []}
            columns={[
              {
                header: "Cliente",
                cell: (props) => {
                  return (
                    <div className="flex flex-col">
                      <p className="font-medium">{props.row.nombre}</p>
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
                    <div className="flex flex-col">
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
                        <HiOutlineLocationMarker className="text-red-400" />
                        <p className="text-sm text-nowrap">
                          Ciudad: {props.row.ciudad.nombre}
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
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
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
                      <LuTrash2 className="text-gray-900" />
                    </span>
                  );
                },
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
