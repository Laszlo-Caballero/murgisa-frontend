"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { tipoRecursoData } from "@/data/tipoRecurso";
import CrearTipoRecurso from "@/modules/tipo-recurso/crear/CrearTipoRecurso";


import { FiPlus } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";

export default function TipoRecursoPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearTipoRecurso/>
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-red-600 p-3 rounded-xl">
            <LuLayers size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Tipos de Recursos</p>
            <p className="text-sm mt-1">
              Configura y gestiona las categorías de recursos del sistema
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
          title="Total Tipos"
          icon={<LuLayers size={28} className="text-white" />}
          description="10"
          extra="Configurados en el sistema"
          className={{
            container: "bg-emerald-100 shadow-lg",
            icon: "bg-emerald-500 rounded-full p-3",
            text: {
              title: "text-emerald-700",
              description: "text-emerald-900 text-3xl",
              extra: "text-emerald-600",
            },
          }}
        />
        <Card
          title="Tipos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="9"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-blue-100 shadow-lg",
            icon: "bg-blue-500 rounded-full p-3",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Total Recursos"
          icon={<LuPackage size={28} className="text-white" />}
          description="108"
          extra="Designados a servicios"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-500 rounded-full p-3",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-600",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
            <LuFilter size={20} className="text-red-600" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar mantenimientos específicos de
            manera rápida
          </p>
        </section>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {tipoRecursoData.map((tipo) => {
          return (
            <CardInfo
              key={tipo.idTipoRecurso}
              title={tipo.nombre}
              icon={<LuLayers size={20} className="text-red-600" />}
              description={tipo.descripcion}
              span={tipo.estado ? "Activo" : "Inactivo"}
              className={{
                container: "bg-white ",
                span: "bg-green-100 text-green-800 border border-green-300",
                header: { icon: "bg-red-100 rounded-md" },
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 font-semibold">
                  ID: TIPO-00{tipo.idTipoRecurso}
                </span>
                <span className="flex items-center gap-x-2">
                  <LuPackage size={15} className="text-blue-600" />
                  <p className="text-xs text-gray-600 font-semibold">
                    Total: {tipo.total} recursos
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-between gap-x-2 mt-4">
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-red-500 border border-red-300 hover:bg-red-50">
                  <LuSquarePen size={15} />
                  Editar
                </Button>
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100">
                  <LuEye size={15} />
                  Desactivar
                </Button>
              </div>
            </CardInfo>
          );
        })}
      </div>
    </div>
  );
}
