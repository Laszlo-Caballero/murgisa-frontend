"use client";

import React from "react";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarNotaEntrada from "@/modules/nota-entrada/listar/Listar";
import { notaEntradaData } from "@/data/notaEntrada";
import { NotaEntrada } from "@/interfaces/response.interface";
import { LuCar } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheck } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuTriangleAlert } from "react-icons/lu";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import CrearNotaEntrada from "@/modules/nota-entrada/crear/CrearNotaEntrada";

export default function page() {
  const notas: NotaEntrada[] = notaEntradaData;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearNotaEntrada />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-pink-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <LuCar className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Nota de Entrada</p>
            <p className="text-sm mt-1">
              Administración de ingresos de recursos al inventario
            </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-pink-600 hover:bg-pink-500 mb-2"
          onClick={() => {
            setShowModal(true);
          }}>
          <FiPlus size={15} />
            Nuevo Nota de Entrada
        </Button>
      </header>  
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total de Notas"
          icon={<LuCar size={28} className="text-white" />}
          description="20"
          extra="Recursos en el sistema"
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
          title="Completadas"
          icon={<LuCircleCheck size={28} className="text-white" />}
          description="20"
          extra="Entregas exitosas"
          className={{
            container: "bg-green-100 shadow-lg",
            icon: "bg-green-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-green-700",
              description: "text-green-900 text-3xl",
              extra: "text-green-800 text-xs"
            },
          }}
        />
        <Card
          title="En proceso"
          icon={<LuClock4 size={28} className="text-white" />}
          description="20"
          extra="Recibo pendiente"
          className={{
            container: "bg-yellow-100 shadow-lg",
            icon: "bg-yellow-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-yellow-700",
              description: "text-yellow-900 text-3xl",
              extra: "text-yellow-800 text-xs"
            },
          }}
        />
        <Card
          title="Atrasado"
          icon={<LuTriangleAlert size={28} className="text-white" />}
          description="20"
          extra="Pedidos sin recibir"
          className={{
            container: "bg-red-100 shadow-lg",
            icon: "bg-red-600 rounded-full p-3 shadow-xl",
            text: {
              title: "text-red-700",
              description: "text-red-900 text-3xl",
              extra: "text-red-800 text-xs"
            },
          }}
        />
      </div>
      <Tabs
      headers={["Catalogo de Entradas"]}
      className="mt-6">
        <ListarNotaEntrada data={notas}></ListarNotaEntrada>

      </Tabs>
    </div>
  )
}
