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
import CardInfo from "@/components/ui/card-info/CardInfo";
import Modal from "@/components/ui/modal/Modal";
import { correctivoData } from "@/data/correctivo";
import { Correctivo } from "@/interfaces/response.interface";


import { useState } from "react";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinArea } from "react-icons/pi";
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
          title="Total Ordenes"
          icon={<LuShield size={28} className="text-blue-600" />}
          description="10"
          className={{
            container: "bg-blue-100 shadow-lg",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
            },
          }}
        />
        <Card
          title="Pendientes"
          icon={<IoTimeOutline size={28} className="text-yellow-600" />}
          description="10"
          className={{
            container: "bg-yellow-100 shadow-lg",
            text: {
              title: "text-yellow-700",
              description: "text-yellow-900 text-3xl",
            },
          }}
        />
        <Card
          title="En Progreso"
          icon={<LuCirclePlay size={28} className="text-orange-600" />}
          description="3"
          className={{
            container: "bg-orange-100 shadow-lg",
            text: {
              title: "text-orange-700",
              description: "text-orange-900 text-3xl",
            },
          }}
        />
        <Card
          title="Completados"
          icon={<LuCircleCheck size={28} className="text-green-600" />}
          description="6"
          className={{
            container: "bg-green-100 shadow-lg",
            text: {
              title: "text-green-700",
              description: "text-green-900 text-3xl",
            },
          }}
        />

        <Card
          title="Costo Total"
          icon={<MdOutlineAttachMoney size={28} className="text-purple-600" />}
          description="$100"
          className={{
            container: "bg-purple-100 shadow-lg",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
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
