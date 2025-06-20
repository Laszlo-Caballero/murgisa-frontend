"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { departamentoData } from "@/data/departamento";
import ListarDepartamentos from "@/modules/departamento/listar/Listar";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import {
  LuBuilding2,
  LuUsers,
  LuCircleCheckBig,
} from "react-icons/lu";
import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";
import CrearDepartamento from "@/modules/departamento/crear/CrearDepartamento";

export default function Departamento() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50 dark:bg-gray-900">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CrearDepartamento />
        </Modal>
      )}

  <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-600">
  <span className="bg-blue-600 p-2 rounded-lg max-w-max mb-2 lg:p-3 dark:bg-blue-400/30">
    <LuBuilding2 className="text-white size-8 lg:size-10" />
  </span>
  <div className="flex flex-col text-white">
    <p className="font-bold text-3xl">Departamentos</p>
    <p className="text-sm mt-1">
      Administra la estructura organizacional de MURGISA
    </p>
  </div>

  <Button
    className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[10%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-4  hover:bg-blue-500 mb-2 bg-blue-500/50 lg:px-6"
    onClick={() => setShowModal(true)}
  >
    <FiPlus size={15} />
    Nuevo Departamento
  </Button>
</header>
  
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Departamentos"
          icon={<LuBuilding2 size={28} className="text-white dark:text-blue-300" />}
          description="3"
          extra="Registrados en el sistema"
          className = {{ 
          container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all" , 
          icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30", 
          text:{
            title:"text-blue-700 dark:text-blue-400" ,
            description:"text-blue-900 text-3xl dark:text-blue-400" ,
            extra: "text-blue-600 dark:text-blue-400"
          },
        }}
        />
        <Card
          title="Departamentos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-emerald-300" />}
          description="3"
          extra="Disponibles para asignación"
          className = {{ 
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all", 
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text:{
              title:"text-emerald-700 dark:text-emerald-400" ,
              description:"text-emerald-900 text-3xl dark:text-emerald-400" ,
              extra: "text-emrald-600 dark:text-emerald-400"
            }
          }}
        />
        <Card
          title="Total Empleados"
          icon={<LuUsers size={28} className="text-white dark:text-purple-300" />}
          description="3"
          extra="Asignados a departamentos"
          className = {{ 
            container: "bg-purple-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all", 
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30", 
            text:{
              title:"text-purple-700 dark:text-purple-400" ,
              description:"text-purple-900 text-3xl dark:text-purple-400" ,
              extra: "text-purple-600 dark:text-purple-400"
            } 
          }}
        />
        <Card
          title="Presupuesto"
          icon={<LuBuilding2 size={28} className="text-white dark:text-orange-300" />}
          description="S/. 6500"
          extra="Para Departamento"
          className = {{ 
            container: "bg-orange-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all", 
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30", 
            text:{
              title:"text-orange-700 dark:text-orange-400" ,
              description:"text-orange-900 text-xl dark:text-orange-400" ,
              extra: "text-orange-600 dark:text-orange-400"
            } 
          }}
        />
      </div>

      <Tabs className="mt-4" headers={["Lista de Departamentos", "Organigrama"]}>
        <ListarDepartamentos data={departamentoData} />
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white dark:bg-gray-800">
          <Image
            src="/organigrama.png"
            alt="Organigrama de MURGISA"
            width={1200}
            height={1200}
            className="w-full h-auto rounded-lg shadow-md max-w-4xl mx-auto"
          />
        </section>
      </Tabs>
    </div>
  );
}