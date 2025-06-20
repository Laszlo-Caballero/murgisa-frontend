"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { cargoData } from "@/data/cargo";
import { PiToolbox } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import CrearCargo from "@/modules/cargo/crear/CrearCargo";
import { LuCircleCheckBig, LuFilter, LuUsers } from "react-icons/lu";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
export default function Cargo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50  dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearCargo />
        </Modal>
      )}

      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 ">
        <span className="bg-blue-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
          <PiToolbox className="text-white size-8 lg:size-10 " />
        </span>
        <div className="flex flex-col dark:bg-gray-900 ">
          <p className="font-bold text-3xl dark:text-white ">Gestión de Cargos</p>
          <p className="text-sm dark:text-gray-500">
            Administra los puestos de trabajo y roles organizacionales
          </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Cargo
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4  dark:bg-gray-900">
        <Card
          title="Total Cargos"
          icon={<PiToolbox size={28} className="text-white" />}
          description={"4"}
          extra="Registrados en la empresa"
          className={{
            container: "bg-blue-100 shadow-lg  dark:bg-blue-900/50 dark:shadow-lg dark:border dark:border-blue-800",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700 dark:text-blue-300",
              description: "text-blue-900 text-3xl dark:text-blue-100",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Cargos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description={"2"}
          extra="Disponibles para asignacion"
          className={{
            container: "bg-purple-100 shadow-lg dark:bg-purple-900/50 dark:shadow-lg dark:border dark:border-purple-800",
            icon: "bg-purple-600 rounded-full p-3",
            text: {
              title: "text-purple-700 dark:text-purple-300",
              description: "text-purple-900 text-3xl dark:text-purple-100",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Total Empleados"
          icon={<LuUsers size={28} className="text-white" />}
          description={"15"}
          extra="Asignados a cargos"
          className={{
            container: "bg-orange-100 shadow-lg dark:bg-orange-900/50 dark:shadow-lg dark:border dark:border-orange-800",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700 dark:text-orange-300",
              description: "text-orange-900 text-3xl dark:text-orange-100",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
        <Card
          title="Cargo con Mayor Cantidad de Empleados"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="Cargo de Ventas"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-green-100 shadow-lg dark:bg-green-900/50 dark:shadow-lg dark:border dark:border-green-800",
            icon: "bg-emerald-600 rounded-full p-3",
            text: {
              title: "text-emerald-700 dark:text-emerald-300",
              description: "text-emerald-900 text-3xl dark:text-emerald-100",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4  dark:bg-gray-900">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white  dark:bg-gray-900">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg  dark:text-white ">
            <LuFilter size={20} className="text-blue-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar cargos específicos de manera
            rápida
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  dark:bg-gray-900">
          {cargoData.map((cargo) => (
            <CardInfo
              key={cargo.idCargo}
              title={cargo.cargo}
              icon={
                <AiOutlineCustomerService size={20} className="text-blue-400" />
              }
              className={{
                container: "bg-white dark:bg-gray-800  dark:text-white",
                header: {
                  icon: "bg-blue-100 dark:bg-blue-900/50",
                },
                span: "bg-blue-100 text-blue-700 font-bold dark:bg-blue-600  dark:text-white",
              }}
              description={cargo.descripcion}
              span={cargo.estado ? "Activo" : "Inactivo"}
            >
              <div className="flex flex-col gap-y-2 ">
                <span className="flex items-center justify-between  dark:text-white">
                  <p className="text-sm text-gray-600  dark:text-gray-500">Empleados</p>
                  <p className="text-sm font-semibold flex items-center gap-x-1 ">
                    <LuUsers /> {cargo.totalUsuario }
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
