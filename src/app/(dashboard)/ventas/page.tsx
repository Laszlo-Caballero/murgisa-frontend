"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { FiPlus } from "react-icons/fi";
import { LuFilter, LuShoppingCart } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { ventaData } from "@/data/venta";
import Table from "@/components/ui/table/Table";
import { IoDocumentOutline } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";
import { CiDollar } from "react-icons/ci";
import { LuBriefcase } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

export default function VentasPagina() {
  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
        <span className="bg-green-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
          <LuShoppingCart className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Gestión de Ventas</p>
          <p className="text-sm">
            Administra y controla todas las ventas de MURGISA
          </p>
        </div>

        <Button className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-green-600 hover:bg-green-500 mb-2">
          <FiPlus size={15} />
          Nueva Venta
        </Button>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-x-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Ventas"
          icon={<LuShoppingCart size={28} className="text-white" />}
          description={"20"}
          extra="Registradas en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Ingresos Totales"
          icon={<LuDollarSign size={28} className="text-white" />}
          description={"S/. 1800"}
          extra="Suma generada por venats"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-600 rounded-full p-3",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-600",
            },
          }}
        />
        <Card
          title="Ventas Completadas"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description={"28"}
          extra="Finalizadas exitosamente"
          className={{
            container: "bg-green-100 shadow-lg",
            icon: "bg-green-600 rounded-full p-3",
            text: {
              title: "text-green-700",
              description: "text-green-900 text-3xl",
              extra: "text-green-600",
            },
          }}
        />
        <Card
          title="Ventas Canceladas"
          icon={<IoWarningOutline size={28} className="text-white" />}
          description={"0"}
          extra="Anuladas o sin Concretar"
          className={{
            container: "bg-red-100 shadow-lg",
            icon: "bg-red-600 rounded-full p-3",
            text: {
              title: "text-red-700",
              description: "text-red-900 text-3xl",
              extra: "text-red-600",
            },
          }}
        />
      </div>

      <div className="py-4 flex w-full flex-col gap-y-4">
        <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-md">
            <LuFilter size={20} className="text-blue-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar clientes específicos de manera
            rápida
          </p>
        </div>
        <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium text-black text-xl">Ventas Registradas</p>
            <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1">
              Total: 5
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-1">
              Gestiona todos las ventas registradas en el sistema
            </p>
          </div>
          {
            <Table
              className="mt-4 bg-white w-full rounded-md "
              data={ventaData}
              columns={[
                {
                  header: "Venta ID",
                  cell: (props) => {
                    return (
                      <div className="flex items-center gap-x-2">
                        <span className="bg-blue-100 rounded-lg p-2">
                          <IoDocumentOutline className="text-blue-900" />
                        </span>
                        <div className="flex flex-col gap-y-1">
                          <span className="text-gray-500 text-xs ">
                            ID: VENT-00{props.row.idVenta}
                          </span>
                          <span className="font-semibold text-gray-800 text-sm">
                            {props.row.cliente}
                          </span>
                        </div>
                      </div>
                    );
                  },
                },
                {
                  header: "Fecha",
                  cell: (props) => {
                    return (
                      <div className="flex xl:flex-row flex-col items-center gap-x-2">
                        <LuCalendar size={15} className="text-red-600" />
                        <p className="text-nowrap">{props.row.fecha}</p>
                      </div>
                    );
                  },
                },
                {
                  header: "Item/Monto",
                  cell: (props) => {
                    return (
                      <div className="flex items-center xl:items-start flex-col gap-y-2">
                        <span className="flex xl:flex-row flex-col items-center gap-x-2">
                          <LuBriefcase className="text-gray-800" />
                          <p className="text-gray-800 text-sm text-nowrap">
                            {props.row.recurso}
                          </p>
                        </span>
                        <span className="flex items-center gap-x-2">
                          <CiDollar className="text-green-600" />
                          <p className="text-green-600 text-sm">
                            {props.row.monto}
                          </p>
                        </span>
                      </div>
                    );
                  },
                },
                {
                  header: "Estado",
                  cell: (props) => {
                    return (
                      <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold">
                        {" "}
                        Activo
                      </Badge>
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
            ></Table>
          }
        </div>
      </div>
    </div>
  );
}
