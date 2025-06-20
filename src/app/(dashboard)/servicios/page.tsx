"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuBriefcase, LuCircleCheckBig, LuChartColumnIncreasing, LuDollarSign } from "react-icons/lu";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Modal from "@/components/ui/modal/Modal";
import Tabs from "@/components/ui/tabs/Tabs";

import CrearServicio from "@/modules/servicios/crear/CrearServicio";
import ListarServicio from "@/modules/servicios/listar/listar";
import ListarCategoria from "@/modules/servicios/categoria/categoria";

import { Servicio } from "@/interfaces/response.interface";
import { Categoria } from "@/interfaces/response.interface";
import { servicioData } from "@/data/servicios";
import { categoriaData } from "@/data/categoria";

export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false);
  const servicios: Servicio[] = servicioData;
  const categoria: Categoria[] = categoriaData;

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CrearServicio />
        </Modal>
      )}

    <header className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white shadow-md">
  <div className="flex items-center gap-4">
    <div className="bg-white/20 p-3 rounded-xl">
      <LuBriefcase size={28} className="text-white" />
    </div>
    <div className="flex flex-col text-white">
      <h1 className="text-3xl font-bold">Gestión de Servicios</h1>
      <p className="text-sm">
        Administra el catálogo de servicios profesionales de MURGISA
      </p>
    </div>
  </div>

  <button
    onClick={() => setShowModal(true)}
    className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition"
  >
    + Nuevo Servicio
  </button>
</header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total de Servicios"
          icon={<LuBriefcase size={28} className="text-white dark:text-purple-400" />}
          description="5"
          extra="En catálogo"
          className={{
            container: "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Servicios Activos"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-emerald-400" />}
          description="4"
          extra="Disponibles"
          className={{
            container: "bg-emerald-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Total de Ventas por Mes"
          icon={<LuChartColumnIncreasing size={28} className="text-white dark:text-blue-400" />}
          description="31"
          extra="Servicios vendidos"
          className={{
            container: "bg-blue-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Ingresos del Mes"
          icon={<LuDollarSign size={28} className="text-white dark:text-orange-400" />}
          description="$ 1500"
          extra="Por servicios"
          className={{
            container: "bg-orange-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>

      <Tabs headers={["Catálogo de Servicios", "Por Categorías"]} className="mt-6">
        <ListarServicio data={servicios} />
        <ListarCategoria data={categoria} />
      </Tabs>
    </div>
  );
}
