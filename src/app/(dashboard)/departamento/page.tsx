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

export default function Departamento() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full p-8 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-[800px] bg-white p-6 rounded-lg shadow-lg">
            <header className="flex items-center gap-x-3">
              <LuBuilding2 size={24} className="text-purple-600" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Departamento</p>
                <p className="text-sm text-gray-500">
                  Completa los datos para registrar un nuevo departamento en el
                  sistema
                </p>
              </div>
            </header>
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Nombre del Departamento"
                icon={<LuBuilding2 />}
                placeholder="Ej: Tarado El Que Lea"
              />
              <Input
                label="Descripcion"
                icon={<LuPencilLine />}
                placeholder="Ej: Laszlo"
              />
            </div>
            <div>
              <Button className="flex items-center gap-x-3 mt-4 bg-purple-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Departamento
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-purple-100 p-3 rounded-full">
            <LuBuilding2 size={24} className="text-purple-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Departamentos</p>
            <p className="text-sm">
              Administra la estructura organizacional de MURGISA
            </p>
          </div>
        </div>

        <Button
          className="flex items-center gap-x-3 py-3 font-semibold px-6 bg-purple-600"
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
          icon={<LuBuilding2 size={35} className="text-purple-600" />}
          description="3"
        />
        <Card
          title="Departamentos Activos"
          icon={<LuCircleCheckBig size={35} className="text-green-600" />}
          description="3"
        />
        <Card
          title="Total Empleados"
          icon={<LuUsers size={35} className="text-blue-600" />}
          description="3"
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
