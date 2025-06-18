"use client";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { departamentoData } from "@/data/departamento";
import ListarDepartamentos from "@/modules/forma-pago/listar/Listar";
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
    <div className="w-full h-full p-9 bg-gray-50 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearDepartamento/>
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-600 p-3 rounded-xl">
            <LuBuilding2 size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Departamentos</p>
            <p className="text-sm">
              Administra la estructura organizacional de MURGISA
            </p>
          </div>
        </div>

        <Button
          className="flex items-center gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Departamento
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Departamentos"
          icon={<LuBuilding2 size={28} className="text-white" />}
          description="3"
          extra="Registrados en el sistema"
          className = {{ 
            container: "bg-blue-50 shadow-lg" , 
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
            container: "bg-purple-50 shadow-lg" , 
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
            container: "bg-orange-50 shadow-lg" , 
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
