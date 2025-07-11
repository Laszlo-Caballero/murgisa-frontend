import Badge from "@/components/ui/badge/Badge";
import Select from "@/components/ui/select/Select";
import Table from "@/components/ui/table/Table";
import React from "react";
import { LuUserCheck } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";

export default function StepFour() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
        <p className="font-bold text-xl">Asignación de Personal</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          label="Seleccionar Personal:"
          placeholder="Seleccione el personal a asignar"
        />
        <Table
          data={[
            {
              name: "Personal 1",
              profesion: "Tecnico",
              fechaInicio: "2023-10-01",
              salario: "$100",
            },
          ]}
          columns={[
            {
              header: "Servicio",
              cell: (props) => (
                <span className="flex items-center gap-x-2">
                  <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
                  {props.row.name}
                </span>
              ),
            },
            {
              header: "Profesión",
              cell: (props) => (
                <Badge className="dark:border-gray-500">
                  {props.row.profesion}
                </Badge>
              ),
            },
            {
              header: "Fecha Inicio",
              cell: (props) => <span>{props.row.fechaInicio}</span>,
            },
            {
              header: "Salario",
              cell: (props) => (
                <span className="text-purple-500 font-bold dark:text-purple-400">
                  {props.row.salario}
                </span>
              ),
            },
            {
              header: " ",
              cell: () => (
                <div className="w-full flex">
                  <span className="p-2 rounded-lg border">
                    <RxCrossCircled />
                  </span>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
