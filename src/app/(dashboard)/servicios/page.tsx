"use client";
import { LuBriefcase } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";

import { Servicio } from "@/interfaces/response.interface";
import { Categoria } from "@/interfaces/response.interface";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Modal from "@/components/ui/modal/Modal";
import ListarServicio from "@/modules/servicios/listar/listar";
import ListarCategoria from "@/modules/servicios/categoria/categoria";
import Tabs from "@/components/ui/tabs/Tabs";
import { servicioData } from "@/data/servicios";
import { categoriaData } from "@/data/categoria";
import { useState } from "react";
import CrearServicio from "@/modules/servicios/crear/CrearServicio";

export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false);
  const servicios: Servicio[] = servicioData;
  const categoria: Categoria[] = categoriaData;
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearServicio />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-purple-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <LuBriefcase className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Servicios</p>
            <p className="text-sm mt-1">
              Administra el catálogo de servicios profesionales de MURGISAA
            </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-purple-600 hover:bg-purple-500 mb-2"  
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Servicio
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total de Servicios"
          icon={<LuBriefcase size={28} className="text-white" />}
          description="5"
          extra="En catálogo"
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
          title="Servicios Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="4"
          extra="Disponibles"
          className={{
            container: "bg-emerald-100 shadow-md",
            icon: "bg-emerald-600 rounded-full p-3",
            text: {
              title: "text-emerald-700",
              description: "text-emerald-900 text-3xl",
              extra: "text-emerald-600",
            },
          }}
        />
        <Card
          title="Total de Ventas por Mes"
          icon={<LuChartColumnIncreasing size={28} className="text-white" />}
          description="31"
          extra="Servicios vendidos"
          className={{
            container: "bg-blue-100 shadow-md",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Ingresos del Mes"
          icon={<LuDollarSign size={28} className="text-white" />}
          description="$ 1500"
          extra="Por servicios"
          className={{
            container: "bg-orange-100 shadow-md",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700",
              description: "text-orange-900 text-3xl",
              extra: "text-orange-600",
            },
          }}
        />
      </div>

      <Tabs
        headers={["Catalogo de Servicios", "Por Categorias"]}
        className="mt-6"
      >
        <ListarServicio data={servicios} />
        <ListarCategoria data={categoria} />
      </Tabs>
    </div>
  );
}
