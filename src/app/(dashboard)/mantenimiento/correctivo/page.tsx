"use client";
import { LuShield } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheck } from "react-icons/lu";
import { LuCirclePlay } from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { LuFilter } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
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
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearCorrectivo/>
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-orange-500 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <PiWrenchBold className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Mantenimiento Correctivo</p>
            <p className="text-sm mt-1">
              Gestiona y monitorea los mantenimientos correctivos programados
            </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-orange-500 hover:bg-orange-400 mb-2"
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
          icon={<LuShield size={28} className="text-white" />}
          description="10"
          extra="Mantenimientos pedidos en el sistema"
          className = {{ container: "bg-blue-100 shadow-lg", 
            icon: "bg-blue-600 rounded-full p-3 shadow-xl",
            text:{
              title:"text-blue-700" ,
              description:"text-blue-900 text-3xl",
              extra: "text-blue-800 text-xs"
          }}}
        />
        <Card
          title="Atrasados"
          icon={<IoTimeOutline size={28} className="text-white" />}
          description="10"
          extra=" No se completaron en la fecha estimada"
              className = {{ 
                container: "bg-red-100 shadow-lg",
                icon: "bg-red-600 rounded-full p-3 shadow-xl",
                text:{title:"text-red-700" ,
                description:"text-red-900 text-3xl",
                extra: "text-red-900 text-xs"}}}
        />
        <Card
          title="En Progreso"
          icon={<LuCirclePlay size={28} className="text-white" />}
          description="3"
          extra="Están siendo trabajadas actualmente."
              className = {{ 
                container: "bg-orange-100 shadow-lg", 
                icon: "bg-orange-600 rounded-full p-3 shadow-xl",
                text:{title:"text-orange-700" ,
                description:"text-orange-900 text-3xl",
                extra: "text-orange-800 text-xs" }}}
        />
        <Card
          title="Completados"
          icon={<LuCircleCheck size={28} className="text-white" />}
          description="6"
          extra="Correctamente por los responsables."
              className = {{ 
                container: "bg-green-100 shadow-lg", 
                icon: "bg-green-600 rounded-full p-3 shadow-xl",
                text:{title:"text-green-700",
                description:"text-green-800 text-3xl", 
                extra: "text-green-800 text-xs"}}}
        />

        <Card
          title="Costo Total"
          icon={<MdOutlineAttachMoney size={28} className="text-white" />}
          description="$100"
          extra="En Mantenimientos"
              className = {{ 
                container: "bg-purple-100 shadow-lg", 
                icon: "bg-purple-600 rounded-full p-3 shadow-xl",
                text:{title:"text-purple-700",
                description:"text-purple-800 text-3xl", 
                extra: "text-purple-800 text-xs"}}}
        />
      </div>
      <Tabs headers={["Lista de Mantenimiento","Vista calendario"]} className="mt-6">
        <ListarCorrectivo data={correctivos}/>
        <ListaCalendario data={correctivos}/>
      </Tabs>
    </div>
  );
}
