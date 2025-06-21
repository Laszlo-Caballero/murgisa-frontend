"use client";
import { LuShield } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheck } from "react-icons/lu";
import { LuCirclePlay } from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { LuFilter } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import cx from "@/libs/cx";
import Button from "@/components/ui/button/Button";
import React from "react";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import Modal from "@/components/ui/modal/Modal";
import { correctivoData } from "@/data/correctivo";
import { Correctivo } from "@/interfaces/response.interface";


import { useState } from "react";

import { IoTimeOutline } from "react-icons/io5";

import CrearCorrectivo from "@/modules/correctivo/crear/CrearCorrectivo";
import ListarCorrectivo from "@/modules/correctivo/listar/Listar";
import ListaCalendario from "@/modules/correctivo/calendario/calendario";

export default function MantenimientoCorrectivo() {
  const [showModal, setShowModal] = useState(false);
  const correctivos: Correctivo[] = correctivoData
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearCorrectivo/>
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-amber-500 to-orange-600/80 dark:from-amber-600">
          <span className="bg-white/20 p-2 rounded-xl max-w-max mb-2 lg:p-3 dark:bg-orange-300/30">
            <PiWrenchBold className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl text-white">Mantenimiento Correctivo</p>
            <p className="text-sm mt-1 text-white">
              Gestiona y monitorea los mantenimientos correctivos programados
            </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[18%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-amber-600 mb-2 bg-orange-500/50 "
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nueva Orden
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card
          title="Total Mantenimiento"
          icon={<LuShield size={28} className="text-white dark:text-blue-400" />}
          description="10"
          extra="Mantenimientos pedidos en el sistema"
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
            title="Atrasados"
            icon={<IoTimeOutline size={28} className="text-white dark:text-red-400" />}
            description="10"
            extra="No se completaron en la fecha estimada"
            className={{
              container: "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-400/10 dark:transition-all",
              icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30 shadow-xl",
              text: {
                title: "text-red-700 dark:text-red-400",
                description: "text-red-900 text-3xl dark:text-red-400",
                extra: "text-red-900 text-xs dark:text-red-400",
              },
            }}
          />

          <Card
            title="En Progreso"
            icon={<LuCirclePlay size={28} className="text-white dark:text-orange-400" />}
            description="3"
            extra="Están siendo trabajadas actualmente."
            className={{
              container: "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
              icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30 shadow-xl",
              text: {
                title: "text-orange-700 dark:text-orange-400",
                description: "text-orange-900 text-3xl dark:text-orange-400",
                extra: "text-orange-800 text-xs dark:text-orange-400",
              },
            }}
          />

          <Card
            title="Completados"
            icon={<LuCircleCheck size={28} className="text-white dark:text-emerald-400" />}
            description="6"
            extra="Correctamente por los responsables."
            className={{
              container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-emerald-400/10 dark:transition-all",
              icon: "bg-green-600 rounded-full p-3 dark:bg-emerald-500/30 shadow-xl",
              text: {
                title: "text-green-700 dark:text-emerald-400",
                description: "text-green-800 text-3xl dark:text-emerald-400",
                extra: "text-green-800 text-xs dark:text-emerald-400",
              },
            }}
          />


          <Card
            title="Costo Total"
            icon={<MdOutlineAttachMoney size={28} className="text-white dark:text-purple-400" />}
            description="$100"
            extra="En Mantenimientos"
            className={{
              container: "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
              icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30 shadow-xl",
              text: {
                title: "text-purple-700 dark:text-purple-400",
                description: "text-purple-800 text-3xl dark:text-purple-400",
                extra: "text-purple-800 text-xs dark:text-purple-400",
              },
            }}
          />

      </div>
      <Tabs headers={["Lista de Mantenimiento","Vista calendario"]} className="mt-6">
        <ListarCorrectivo data={correctivos}/>
        <ListaCalendario data={correctivos}/>
      </Tabs>
    </div>
  );
}
