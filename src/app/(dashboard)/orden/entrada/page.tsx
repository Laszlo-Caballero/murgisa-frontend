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
import cx from "@/libs/cx";

export default function page() {
  const notas: NotaEntrada[] = notaEntradaData;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100  dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearNotaEntrada />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-rose-500/80 to-rose-700/80 dark:from-rose-500/80 dark:to-rose-800/90">
          <span className="dark:bg-rose-400/40 p-2 rounded-xl max-w-max mb-2 lg:p-3 bg-rose-400">
            <LuCar className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl text-white ">Gestión de Nota de Entrada</p>
            <p className="text-sm mt-1 text-white ">
              Administración de ingresos de recursos al inventario
            </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[10%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-rose-400/60 mb-2 bg-rose-400/40 dark:hover:bg-rose-500/60"
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
        icon={<LuCar size={28} className="text-white dark:text-blue-400" />}
        description="20"
        extra="Recursos en el sistema"
        className={{
          container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
          icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30 shadow-xl",
          text: {
            title: "text-blue-700 dark:text-blue-400",
            description: "text-blue-900 text-3xl dark:text-blue-400",
            extra: "text-blue-800 text-xs dark:text-blue-400",
          },
        }}
      />

          <Card
          title="Completadas"
          icon={<LuCircleCheck size={28} className="text-white dark:text-emerald-400" />}
          description="20"
          extra="Entregas exitosas"
          className={{
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-emerald-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-emerald-500/30 shadow-xl",
            text: {
              title: "text-green-700 dark:text-emerald-400",
              description: "text-green-900 text-3xl dark:text-emerald-400",
              extra: "text-green-800 text-xs dark:text-emerald-400",
            },
          }}
        />

          <Card
            title="En proceso"
            icon={<LuClock4 size={28} className="text-white dark:text-orange-400" />}
            description="20"
            extra="Recibo pendiente"
            className={{
              container: "bg-yellow-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
              icon: "bg-yellow-600 rounded-full p-3 dark:bg-orange-500/30 shadow-xl",
              text: {
                title: "text-yellow-700 dark:text-orange-400",
                description: "text-yellow-900 text-3xl dark:text-orange-400",
                extra: "text-yellow-800 text-xs dark:text-orange-400",
              },
            }}
          />

        <Card
          title="Atrasado"
          icon={<LuTriangleAlert size={28} className="text-white dark:text-red-400" />}
          description="20"
          extra="Pedidos sin recibir"
          className={{
            container: "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-400/10 dark:transition-all",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30 shadow-xl",
            text: {
              title: "text-red-700 dark:text-red-400",
              description: "text-red-900 text-3xl dark:text-red-400",
              extra: "text-red-800 text-xs dark:text-red-400",
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
