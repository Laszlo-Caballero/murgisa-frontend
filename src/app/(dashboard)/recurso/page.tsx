"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import { recursoData } from "@/data/recurso";
import Badge from "@/components/ui/badge/Badge";
import CrearRecurso from "@/modules/recurso/crear/CrearRecurso";
import Modal from "@/components/ui/modal/Modal";
import cx from "@/libs/cx";

import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { PiMoneyWavyLight } from "react-icons/pi";
import { useState } from "react";

export default function RecursoPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearRecurso />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-red-500 to-red-800 dark:from-red-700">
        <span className="bg-red-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
          <LuPackage className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white">Gestión de Recursos</p>
          <p className="text-sm mt-1 text-white">
            Administra el inventario de recursos, equipos y materiales
          </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-red-700 hover:bg-red-400 mb-2"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Recurso
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <Card
          title="Total"
          icon={<LuPackage size={28} className="text-white" />}
          description="20"
          extra="Recursos en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg  dark:bg-blue-900/50 dark:shadow-lg dark:border dark:border-blue-800",
            icon: "bg-blue-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-blue-700 dark:text-blue-300",
              description: "text-blue-900 text-3xl dark:text-blue-100",
              extra: "text-blue-800 text-xs dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Disponibles"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="11"
          extra="Listo para ser asignado"
          className={{
            container: "bg-emerald-100 shadow-lg dark:bg-green-900/50 dark:shadow-lg dark:border dark:border-green-800",
            icon: "bg-emerald-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-emerald-700 dark:text-emerald-300",
              description: "text-emerald-900 text-3xl dark:text-emerald-100",
              extra: "text-purpe-800 text-xs dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="En Uso"
          icon={<LuClock4 size={28} className="text-white" />}
          description="7"
          extra="Asignado y en funcionamiento"
          className={{
            container: "bg-purple-100 shadow-lg  dark:bg-purple-900/50 dark:shadow-lg dark:border dark:border-purple-800",
            icon: "bg-purple-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-purple-700 dark:text-purple-300",
              description: "text-purple-900 text-3xl dark:text-purple-100",
              extra: "text-purple-800 text-xs dark:text-purple-400",
            },
          }}
        />
        <Card
          title="En Mantenimiento"
          icon={<LuWrench size={28} className="text-white" />}
          description="2"
          extra="Recurso en revisión técnica"
          className={{
            container: "bg-orange-100 shadow-lg  dark:bg-orange-900/50 dark:shadow-lg dark:border dark:border-orange-800",
            icon: "bg-orange-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-orange-700 dark:text-orange-300",
              description: "text-orange-900 text-3xl dark:text-orange-100",
              extra: "text-orange-800 text-xs dark:text-orange-400",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-red-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar recursos específicos de manera
            rápida
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full rounded-md shadow-md p-4 bg-white dark:bg-gray-800 dark:shadow-lg dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full ">
          <p className="font-medium text-black text-xl dark:text-white">Recursos Registrados</p>
          <span className="bg-gray-300 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los recursos registrados en el sistema
          </p>
        </div>
        {
          <Table
            className="mt-4 bg-white w-full rounded-md "
            data={recursoData}
            columns={[
              {
                header: "Recurso",
                cell: (props) => {
                  return (
                    <div className="flex items-start gap-x-3 dark:text-white">
                      <span className="bg-red-100 p-2 rounded-lg">
                        <LuPackage size={15} className="text-red-600" />
                      </span>
                      <div className="flex flex-col text-nowrap">
                        <p className="font-semibold text-sm">
                          {props.row.nombre}
                        </p>
                        <p className="text-xs text-gray-600">
                          ID: REC-00{props.row.idRecurso}
                        </p>
                      </div>
                    </div>
                  );
                },
              },
              {
                header: "Categoria",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-2 dark:text-white">
                      <span className="flex xl:flex-row flex-col items-center gap-x-2">
                        <LuClipboardList size={15} className="text-blue-600" />
                        <p className="font-semibold text-sm">
                          {props.row.tipo}
                        </p>
                      </span>
                      <p className="text-gray-500 text-xs text-center xl:text-start">
                        Insertar breve descripcion{" "}
                      </p>
                    </div>
                  );
                },
              },
              {
                header: "Disponibilidad",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-2">
                      <Badge className="bg-yellow-100 text-yellow-800 border-orange-200 font-semibold">
                        En uso
                      </Badge>
                      <p className="text-xs text-gray-500">Vendido 10 veces</p>
                    </div>
                  );
                },
              },
              {
                header: "Proveedor",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-2 text-white">
                      <span className="flex items-center gap-x-2">
                        <LuBuilding2 size={15} className="text-purple-600" />
                        <p className="font-semibold text-sm">
                          {props.row.proveedor}
                        </p>
                      </span>
                      <span className="text-xs text-gray-500 text-nowrap">
                        Responsable: {props.row.proveedorResponsable}
                      </span>
                    </div>
                  );
                },
              },
              {
                header: "Precio",
                cell: (props) => {
                  return (
                    <span className="flex xl:flex-row flex-col w-auto items-center gap-x-2">
                      <PiMoneyWavyLight size={15} className="text-green-600" />
                      <p className="font-semibold text-green-600 text-sm text-nowrap">
                        S/. {props.row.precio}
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
          ></Table>
        }
      </div>
    </div>
  );
}
