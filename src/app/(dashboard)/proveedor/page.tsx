"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuBuilding2, LuCircleCheckBig, LuShoppingCart } from "react-icons/lu";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Modal from "@/components/ui/modal/Modal";
import Tabs from "@/components/ui/tabs/Tabs";

import ListarProveedor from "@/modules/proveedor/listar/Listar";
import CrearProveedor from "@/modules/proveedor/crear/CrearProveedor";
import ListarTipoRecurso from "@/modules/proveedor/tipo/tipo";

import { proveedorData } from "@/data/proveedor";
import { tipoRecursoData } from "@/data/tipoRecurso";

export default function ProveedorPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CrearProveedor />
        </Modal>
      )}

      <header className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white shadow-md">
  <div className="flex items-center gap-4">
    <div className="bg-white/20 p-3 rounded-xl">
      <LuBuilding2 size={28} className="text-white" />
    </div>
    <div className="flex flex-col text-white">
      <h1 className="text-3xl font-bold">Gestión de Proveedores</h1>
      <p className="text-sm">
        Administra y controla todos los proveedores de MURGISA
      </p>
    </div>
  </div>

  <button
    onClick={() => setShowModal(true)}
    className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition"
  >
    + Nuevo Proveedor
  </button>
</header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
        title="Total Proveedores"
        icon={<LuBuilding2 size={28} className="text-white dark:text-red-400" />}
        description="20"
        extra="Registrados en la empresa"
  className={{
    container:
       "bg-red-100 shadow-lg dark:bg-red-500/20 dark:border dark:border-red-500/40",
    icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30",
    text: {
      title: "text-red-700 dark:text-red-300",
      description: "text-red-900 text-3xl dark:text-red-200",
      extra: "text-red-600 dark:text-red-300",
    },
  }}
/>

        <Card
          title="Proveedores Activos"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-emerald-400" />}
          description="18"
          extra="Disponibles en la empresa"
          className={{
            container: 
            "bg-emerald-100 shadow-lg dark:bg-emerald-500/20 dark:border dark:border-emerald-500/40",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-300",
              description:"text-emerald-900 text-3xl dark:text-emerald-200",
              extra: "text-emerald-600 dark:text-emerald-300",
            },
          }}
        />
        <Card
          title="Total Compras"
          icon={<LuShoppingCart size={28} className="text-white dark:text-purple-400" />}
          description="48"
          extra="Del Mes"
          className={{
            container: 
             "bg-purple-100 shadow-lg dark:bg-purple-500/20 dark:border dark:border-purple-500/40",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-300",
              description: "text-purple-900 text-3xl dark:text-purple-200",
              extra: "text-purple-600 dark:text-purple-300",
            },
          }}
        />
        <Card
          title="Más Frecuente"
          icon={<LuShoppingCart size={28} className="text-white dark:text-orange-400" />}
          description="Proveedor A"
          extra="Del Mes"
          className={{
            container: 
            "bg-orange-100 shadow-lg dark:bg-orange-500/20 dark:border dark:border-orange-500/40",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-300",
              description: "text-orange-900 text-xl dark:text-orange-200",
              extra: "text-orange-600 dark:text-orange-300",
            },
          }}
        />
      </div>

      <Tabs
        headers={["Catálogo de Proveedores", "Por Tipo de Recurso"]}
        
        className="mt-6 dark:text-red-400"
      >
        <ListarProveedor data={proveedorData} />
        <ListarTipoRecurso data={tipoRecursoData} />
      </Tabs>
    </div>
  );
}
