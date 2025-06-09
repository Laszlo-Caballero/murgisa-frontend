"use client";
import Table from "@/components/ui/table/Table";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import cx from "@/libs/cx";
import { Cliente } from "@/interfaces/response.interface";

interface ListarClientesProps {
  data: Cliente[];
}

export default function ListarClientes({ data }: ListarClientesProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      <section className="flex w-full flex-col p-4 rounded-lg shadow">
        <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
          <LuFilter />
          Filtros
        </span>
      </section>
      <div className="flex flex-col w-full rounded-lg shadow p-4">
        <p className="font-medium text-black text-2xl">Clientes Registrados</p>

        <Table
          className="mt-4"
          data={data}
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
                      <AiOutlineMail className="text-gray-400" />
                      <p className="text-sm">{props.row.correo}</p>
                    </span>

                    <span className="flex items-center gap-x-2">
                      <LuPhone className="text-gray-400" />
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
                    <span className="flex items-center gap-x-2">
                      <HiOutlineLocationMarker className="text-gray-400" />
                      <p className="text-sm">
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
            },
          ]}
        />
      </div>
    </div>
  );
}
