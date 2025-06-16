"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import { recursoData } from "@/data/recurso";
import Badge from "@/components/ui/badge/Badge";
import CrearRecurso from "@/modules/recurso/crear/CrearRecurso";
import Modal from "@/components/ui/modal/Modal";

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
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        > 
          <CrearRecurso/>
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-red-600 p-3 rounded-xl">
            <LuPackage size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Recursos</p>
            <p className="text-sm mt-1">
              Administra el inventario de recursos, equipos y materiales
            </p>
          </div>
        </div>
        <Button
          className="flex items-center gap-x-3 py-3 font-semibold mt-4 bg-red-600 text-white shadow-lg hover:bg-red-500"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Recurso
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total"
          icon={<LuPackage size={28} className="text-white" />}
          description="20"
          extra="Recursos en el sistema"
          className={{
            container: "bg-emerald-100 shadow-lg",
            icon: "bg-emerald-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-emerald-700",
              description: "text-emerald-900 text-3xl",
              extra: "text-green-800 text-xs"
            },
          }}
        />
        <Card
          title="Disponibles"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="11"
          extra="Listo para ser asignado"
          className={{
            container: "bg-blue-100 shadow-lg",
            icon: "bg-blue-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-800 text-xs"
            },
          }}
        />
        <Card
          title="En Uso"
          icon={<LuClock4 size={28} className="text-white" />}
          description="7"
          extra="Asignado y en funcionamiento"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-800 text-xs"
            },
          }}
        />
        <Card
          title="En Mantenimiento"
          icon={<LuWrench size={28} className="text-white" />}
          description="2"
          extra="Recurso en revisión técnica"
          className={{
            container: "bg-orange-100 shadow-lg",
            icon: "bg-orange-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-orange-700",
              description: "text-orange-900 text-3xl",
              extra: "text-orange-800 text-xs"
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-md">
            <LuFilter size={20} className="text-red-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar recursos específicos de manera
            rápida
          </p>
        </section>
      </div>

      {
        <Table
          className="mt-4 bg-white w-full rounded-md "
          data={recursoData}
          columns={[
            {
              header: "Profesión",
              cell: (props) => {
                return (
                  <div className="flex items-start gap-x-3">
                    <span className="bg-red-100 p-2 rounded-lg">
                      <LuPackage size={15} className="text-red-600" />
                    </span>
                    <div className="flex flex-col">
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
                  <div className="flex flex-col gap-y-2">
                    <span className="flex items-center gap-x-2">
                      <LuClipboardList size={15} className="text-blue-600" />
                      <p className="font-semibold text-sm">{props.row.tipo}</p>
                    </span>
                    <p className="text-gray-500 text-xs">Insertar breve descripcion </p>
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
                  <div className="flex flex-col gap-y-2">
                    <span className="flex items-center gap-x-2">
                      <LuBuilding2 size={15} className="text-purple-600" />
                      <p className="font-semibold text-sm">
                        {props.row.proveedor}
                      </p>
                    </span>
                    <span className="text-xs text-gray-500">
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
                  <span className="flex w-auto items-center gap-x-2">
                    <PiMoneyWavyLight size={15} className="text-green-600" />
                    <p className="font-semibold text-green-600 text-sm">
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
                  <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold">
                    Activo
                  </Badge>
                );
              },
            },
            {
              header: "Acciones",
            },
          ]}
        ></Table>
      }
    </div>
  );
}
