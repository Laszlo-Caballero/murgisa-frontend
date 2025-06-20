"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  LuShield,
  LuCircleCheck,
  LuCirclePlay,
  LuTriangleAlert,
  LuCirclePlus,
} from "react-icons/lu";
import { GrHostMaintenance, GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDateRange, MdLowPriority } from "react-icons/md";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Modal from "@/components/ui/modal/Modal";
import Tabs from "@/components/ui/tabs/Tabs";

import ListarPreventivos from "@/modules/preventivo/listar/listar";
import ListarCalendario from "@/modules/preventivo/calendario/calendario";

import { preventivoData } from "@/data/preventivo";
import { PlanificacionPreventivo } from "@/interfaces/response.interface";

export default function MantenimientoPreventivoPage() {
  const [showModal, setShowModal] = useState(false);
  const preventivo: PlanificacionPreventivo[] = preventivoData;

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <header className="flex items-center gap-x-3">
              <GrHostMaintenance size={40} className="text-orange-500" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold dark:text-white">
                  Agregar una planificación de mantenimiento
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Completa los datos para registrar una nueva planificación en
                  el sistema
                </p>
              </div>
            </header>

         
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="flex flex-col gap-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Fecha de mantenimiento
                </label>
                <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <MdDateRange className="text-gray-500 dark:text-gray-300" />
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400 dark:placeholder-gray-400"
                  />
                </div>
              </div>

        
              <div className="flex flex-col gap-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Prioridad
                </label>
                <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <MdLowPriority className="text-gray-500 dark:text-gray-300" />
                  <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                    <option>Selecciona la prioridad</option>
                    <option value="1">Alta</option>
                    <option value="2">Media</option>
                    <option value="3">Baja</option>
                  </select>
                </div>
              </div>

         
              <div className="flex flex-col gap-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Recurso
                </label>
                <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <LuCirclePlus className="text-gray-500 dark:text-gray-300" />
                  <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                    <option>Selecciona un recurso</option>
                    <option value="1">Grúa</option>
                    <option value="2">Excavadora</option>
                    <option value="3">Generador</option>
                  </select>
                </div>
              </div>

           
              <div className="flex flex-col gap-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Personal
                </label>
                <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <GrUserWorker className="text-gray-500 dark:text-gray-300" />
                  <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                    <option>Selecciona el responsable del mantenimiento</option>
                    <option value="1">Técnico 1</option>
                    <option value="2">Técnico 2</option>
                    <option value="3">Técnico 3</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Horario
                </label>
                <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                  <AiFillSchedule className="text-gray-500 dark:text-gray-300" />
                  <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                    <option>Selecciona el horario</option>
                    <option value="1">8:00 - 10:00</option>
                    <option value="2">10:00 - 12:00</option>
                    <option value="3">14:00 - 16:00</option>
                  </select>
                </div>
              </div>
            </div>

             <Button className="flex items-center gap-x-3 mt-4 bg-orange-500 text-white py-3 font-semibold hover:bg-orange-400">
              <FiPlus size={15} className="mr-2" />
              Registrar Planificación
            </Button>
          </div>
        </Modal>
      )}

    
      <div className="relative w-full rounded-xl overflow-hidden shadow-md mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-90 z-0 rounded-xl" />
       <header className="relative flex md:flex-row flex-col md:items-center gap-x-4 p-6 z-10">
          <span className="bg-white/20 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <LuShield className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col text-white">
            <p className="font-bold text-3xl">Mantenimiento Preventivo</p>
            <p className="text-sm">
              Gestiona y monitorea los mantenimientos preventivos programados
            </p>
          </div>
          <Button
            className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-orange-500 hover:bg-orange-400 mb-2 text-white border border-white/30"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FiPlus size={15} />
            Planificar Mantenimiento
          </Button>
        </header>
      </div>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total"
          icon={<LuShield size={28} className="text-white dark:text-blue-400" />}
          description="10"
          extra="Mantenimientos planificados en el sistema"
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-blue-500/20 dark:border dark:border-blue-500/40",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-300",
              description: "text-blue-900 text-3xl dark:text-blue-200",
              extra: "text-blue-800 text-xs dark:text-blue-300",
            },
          }}
        />
        <Card
          title="Completados"
          icon={<LuCircleCheck size={28} className="text-white dark:text-green-400" />}
          description="6"
          extra="Correctamente por los responsables."
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-green-500/20 dark:border dark:border-green-500/40",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-300",
              description: "text-green-800 text-3xl dark:text-green-200",
              extra: "text-green-800 text-xs dark:text-green-300",
            },
          }}
        />
        <Card
          title="En Progreso"
          icon={<LuCirclePlay size={28} className="text-white dark:text-orange-400" />}
          description="3"
          extra="Están siendo trabajadas actualmente."
          className={{
            container:
              "bg-orange-100 shadow-lg dark:bg-orange-500/20 dark:border dark:border-orange-500/40",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-300",
              description: "text-orange-900 text-3xl dark:text-orange-200",
              extra: "text-orange-800 text-xs dark:text-orange-300",
            },
          }}
        />
        <Card
          title="Atrasados"
          icon={<LuTriangleAlert size={28} className="text-white dark:text-red-400" />}
          description="1"
          extra="No se completaron en la fecha estimada"
          className={{
            container:
              "bg-red-100 shadow-lg dark:bg-red-500/20 dark:border dark:border-red-500/40",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30",
            text: {
              title: "text-red-700 dark:text-red-300",
              description: "text-red-900 text-3xl dark:text-red-200",
              extra: "text-red-900 text-xs dark:text-red-300",
            },
          }}
        />
      </div>

 
      <Tabs
        headers={["Lista de Mantenimientos", "Vista Calendario"]}
        className="mt-6 dark:text-orange-400"
      >
        <ListarPreventivos data={preventivo} />
        <ListarCalendario data={preventivo} />
      </Tabs>
    </div>
  );
}
