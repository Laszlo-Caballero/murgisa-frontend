"use client";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { tipoMantenimientoData } from "@/data/tipomantenimiento";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Modal from "@/components/ui/modal/Modal";
import React from "react";
import { useState } from "react";

import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import CrearTipoMantenimiento from "@/modules/tipoMantenimiento/CrearTipoMantenimiento";



export default function page() {
  const [showModal, setShowModal] = useState(false);
  return (
      <div className="w-full h-full p-8 flex flex-col bg-gray-50">
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <CrearTipoMantenimiento />
          </Modal>
        )}
        <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
            <span className="bg-orange-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
              <LuSettings className="text-white size-8 lg:size-10" />
            </span>
            <div className="flex flex-col">
              <p className="font-bold text-3xl">Gestión de Tipos de Mantenimiento</p>
              <p className="text-sm mt-1">
                Administra y configura los diferentes tipos de mantenimiento disponibles
              </p>
            </div>
          <Button className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-orange-600 hover:bg-orange-500 mb-2"
            onClick={() => {
            setShowModal(true);
          }}>
            <FiPlus size={15} />
            Nuevo Mantenimiento
          </Button>
        </header>
        <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Total Tipos"
            icon={<LuSettings size={28} className="text-white" />}
            description="10"
            extra="Configurados"
            className = {{ container: "bg-emerald-100 shadow-lg" , icon: "bg-emerald-500 rounded-full p-3", text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" ,extra: "text-emerald-600"} }}
          />
          <Card
            title="Tipos Activos"
            icon={<LuCircleCheckBig size={28} className="text-white" />}
            description="9"
            extra="Disponibles"
            className = {{ container: "bg-blue-100 shadow-lg" , icon: "bg-blue-500 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
          />
          <Card
            title="Total Usos"
            icon={<LuChartColumn size={28} className="text-white" />}
            description="108"
            extra="Aplicaciones"
            className = {{ container: "bg-orange-100 shadow-lg" , icon: "bg-orange-500 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" ,extra: "text-orange-600"} }}
          />
        </div>
        <div className="py-4 flex w-full flex-col gap-y-4">
          <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
            <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
              <LuFilter size={20} className="text-orange-500"/>
                Filtros de Búsqueda
            </span>
            <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar mantenimientos específicos de manera rápida</p>
          </section>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tipoMantenimientoData.map((tipo) => {
              return(
                <CardInfo
                  key={tipo.idTipoMantenimiento}
                  title={tipo.nombre}
                  icon={<LuSettings size={20} className="text-orange-600" />}
                  description={tipo.descripcion}
                  span={tipo.estado ? "Activo" : "Inactivo"}
                  className={{
                    container: "bg-white ",
                    span: "bg-green-100 text-green-800 border border-green-300",
                    header: {icon: "bg-orange-100 rounded-md"}}}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-2">
                      <LuClock4 size={15} className="text-blue-600" />
                      <p className="text-xs text-gray-600 font-semibold">
                        {tipo.duracion} horas
                      </p>
                    </span>
                    <span className="text-xs text-gray-600 font-semibold">
                      Usado {tipo.total} veces
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
                )
              }
            )}
        </div>

      </div>
  );
}
