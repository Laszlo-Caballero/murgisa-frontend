"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { cargoData } from "@/data/cargo";
import { LuBriefcase } from "react-icons/lu";
import { PiToolbox } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import CrearCargo from "@/modules/cargo/crear/CrearCargo";
import {
  LuCircleCheckBig,
  LuFilter,
  LuUserCheck,
  LuUsers,
} from "react-icons/lu";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import Input from "@/components/ui/input/Input";
import { LuPencilLine } from "react-icons/lu";
import { BsFilePost } from "react-icons/bs";

export default function Cargo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full p-8 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearCargo/>
        </Modal>
      )}

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-600 p-3 rounded-xl">
            <PiToolbox size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Cargos</p>
            <p className="text-sm">
              Administra los puestos de trabajo y roles organizacionales
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
          Nuevo Cargo
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Cargos"
          icon={<PiToolbox size={28} className="text-white" />}
          description={"4"}
          extra="Registrados en la empresa"
          className = {{ 
            container: "bg-blue-50 shadow-lg" , 
            icon: "bg-blue-600 rounded-full p-3", 
            text:{title:"text-blue-700" ,
            description:"text-blue-900 text-3xl" ,
            extra: "text-blue-600"} }}
        />
        <Card
          title="Cargos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description={"2"}
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
          description={"15"}
          extra="Asignados a cargos"
          className = {{ 
            container: "bg-orange-50 shadow-lg" , 
            icon: "bg-orange-600 rounded-full p-3", 
            text:{title:"text-orange-700" ,
            description:"text-orange-900 text-3xl" ,
            extra: "text-orange-600"} }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4 ">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
            <LuFilter size={20} className="text-blue-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar cargos específicos de manera
            rápida
          </p>
        </section>

        <div className="grid grid-cols-3 gap-4">
          {cargoData.map((cargo) => (
            <CardInfo
              key={cargo.idCargo}
              title={cargo.cargo}
              icon={
                <AiOutlineCustomerService
                  size={20}
                  className="text-blue-400"
                />
              }
              className={{
                container: "bg-white",
                header: {
                  icon: "bg-blue-100",
                },
                span: "bg-blue-100 text-blue-700 font-bold",
              }}
              description={cargo.descripcion}
              span={cargo.estado ? "Activo" : "Inactivo"}
            >
              <div className="flex flex-col gap-y-2">
                <span className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Empleados</p>
                  <p className="text-sm font-semibold flex items-center gap-x-1">
                    <LuUsers /> {cargo.totalUsuario}
                  </p>
                </span>
              </div>
            </CardInfo>
          ))} 
        </div>
      </div>
    </div>
  );
}
