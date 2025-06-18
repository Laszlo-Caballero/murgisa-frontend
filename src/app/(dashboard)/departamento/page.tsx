"use client";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { departamentoData } from "@/data/departamento";
import ListarDepartamentos from "@/modules/departamento/listar/Listar";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { LuBuilding2, LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import Modal from "@/components/ui/modal/Modal";
import Input from "@/components/ui/input/Input";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import CrearDepartamento from "@/modules/departamento/crear/CrearDepartamento";

export default function Departamento() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearDepartamento/>
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-blue-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <LuBuilding2  className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Departamentos</p>
            <p className="text-sm">
              Administra la estructura organizacional de MURGISA
            </p>
          </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Departamento
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Departamentos"
          icon={<LuBuilding2 size={28} className="text-white" />}
          description="3"
          extra="Registrados en el sistema"
          className = {{ 
            container: "bg-blue-100 shadow-lg" , 
            icon: "bg-blue-600 rounded-full p-3", 
            text:{title:"text-blue-700" ,
            description:"text-blue-900 text-3xl" ,
            extra: "text-blue-600"} }}
        />
        <Card
          title="Departamentos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="3"
          extra="Disponibles para asignacion"
          className = {{ 
            container: "bg-purple-100 shadow-lg" , 
            icon: "bg-purple-600 rounded-full p-3", 
            text:{title:"text-purple-700" ,
            description:"text-purple-900 text-3xl" ,
            extra: "text-purple-600"} }}
        />
        <Card
          title="Total Empleados"
          icon={<LuUsers size={28} className="text-white" />}
          description="3"
          extra="Asignados a departamentos"
          className = {{ 
            container: "bg-orange-100 shadow-lg" , 
            icon: "bg-orange-600 rounded-full p-3", 
            text:{title:"text-orange-700" ,
            description:"text-orange-900 text-3xl" ,
            extra: "text-orange-600"} }}
        />
      </div>
      <Tabs
        className="mt-4"
        headers={["Lista de Departamentos", "Organigrama"]}
      >
        <ListarDepartamentos data={departamentoData} />
        <section className="flex w-full flex-col p-4 rounded-lg shadow">
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
