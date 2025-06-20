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
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import CrearVenta from "@/modules/ventas/crear/CrearVenta";

export default function VentasPagina() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-full bg-gray-100 p-8 flex flex-col dark:bg-gray-900">
      {" "}
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearVenta onClose={() => setShowModal(false)} />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700">
        <span className="bg-green-500 p-2 rounded-xl max-w-max mb-2 lg:p-3 dark:bg-green-400/30">
          <LuShoppingCart className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl ">Gestión de Ventas</p>
          <p className="text-sm">
            Administra y controla todas las ventas de MURGISA
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 hover:bg-green-500 mb-2 bg-green-400/50"
          onClick={() => setShowModal(true)}
        >
          <FiPlus size={15} />
          Nueva Venta
        </Button>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-x-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Ventas"
          icon={<LuShoppingCart size={28} className="text-white dark:text-blue-400" />}
          description={"20"}
          extra="Registradas en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Ingresos Totales"
          icon={<LuDollarSign size={28} className="text-white dark:text-purple-400" />}
          description={"S/. 1800"}
          extra="Suma generada por venats"
          className={{
            container: "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Ventas Completadas"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-green-400" />}
          description={"28"}
          extra="Finalizadas exitosamente"
          className={{
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-400",
              description: "text-green-900 text-3xl dark:text-green-400",
              extra: "text-green-600 dark:text-green-400",
            },
          }}
        />
        <Card
          title="Ventas Canceladas"
          icon={<IoWarningOutline size={28} className="text-white dark:text-red-400" />}
          description={"0"}
          extra="Anuladas o sin Concretar"
          className={{
            container: "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-600/30",
            text: {
              title: "text-red-700 dark:text-red-500",
              description: "text-red-900 text-3xl dark:text-red-500",
              extra: "text-red-600 dark:text-red-500",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700 ">
          <span className="flex items-center gap-x-2 font-semibold text-black text-md dark:text-white">
            <LuFilter size={20} className="text-blue-500 dark:text-blue-400" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Utiliza los filtros para encontrar clientes específicos de manera
            rápida
          </p>
        </div>

        <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800 dark:border dark:border-gray-700 ">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium text-black text-xl dark:text-white ">Ventas Registradas</p>
            <Badge className="bg-gray-50 text-xs text-gray-600 font-bold border-gray-300 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"> 
              Total: 5
            </Badge>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
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
                        <span className="bg-blue-100 rounded-lg p-2 dark:bg-blue-500/30">
                          <IoDocumentOutline className="text-blue-900 dark:text-blue-400" />
                        </span>
                        <div className="flex flex-col gap-y-1">
                          <span className="text-gray-500 text-xs dark:text-gray-400">
                            ID: VENT-00{props.row.idVenta}
                          </span>
                          <span className="font-semibold text-gray-800 text-sm dark:text-gray-300">
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
                        <LuCalendar size={15} className="text-red-600 dark:text-red-500" />
                        <p className="text-nowrap dark:text-gray-200">{props.row.fecha}</p>
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
                          <LuBriefcase className="text-gray-800 dark:text-gray-300" />
                          <p className="text-gray-800 text-sm text-nowrap dark:text-gray-300">
                            {props.row.recurso}
                          </p>
                        </span>
                        <span className="flex items-center gap-x-2">
                          <CiDollar className="text-green-600 dark:text-green-400" />
                          <p className="text-green-600 text-sm dark:text-green-400">
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
                      <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700">
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
                        <LuTrash2 className="text-gray-900 dark:text-gray-400" />
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
