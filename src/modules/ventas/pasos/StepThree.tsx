import Select from "@/components/ui/select/Select";
import Table from "@/components/ui/table/Table";
import React from "react";
import { LuBox } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";

export default function StepThree() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <LuBox className="size-6 text-green-500" />
        <p className="font-bold text-xl">Servicios a Contratar</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          label="Servicio:"
          placeholder="Seleccione un tipo de servicio"
        />
        <Table
          data={[
            {
              name: "Servicio 1",
              fechaInicio: "2023-10-01",
              fechaFin: "2023-10-31",
              Precio: "$100",
            },
          ]}
          columns={[
            {
              header: "Servicio",
              cell: (props) => <span>{props.row.name}</span>,
            },
            {
              header: "Fecha Inicio",
              cell: (props) => <span>{props.row.fechaInicio}</span>,
            },
            {
              header: "Fecha Fin",
              cell: (props) => <span>{props.row.fechaFin}</span>,
            },
            {
              header: "Precio",
              cell: (props) => (
                <span className="text-green-500 font-bold">
                  {props.row.Precio}
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
