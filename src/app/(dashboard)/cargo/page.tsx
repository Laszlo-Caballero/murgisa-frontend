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

      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-600">
        <span className="bg-blue-600 p-2 rounded-lg max-w-max mb-2 lg:p-3 dark:bg-blue-400/30 ">
          <PiToolbox className="text-white size-8 lg:size-10 " />
        </span>
        <div className="flex flex-col ">
          <p className="font-bold text-3xl text-white ">Gestión de Cargos</p>
          <p className="text-sm  text-white">
            Administra los puestos de trabajo y roles organizacionales
          </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[22%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50 "
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
          icon={<PiToolbox size={28} className="text-white dark:text-blue-300" />}
          description={"4"}
          extra="Registrados en la empresa"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Cargos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-green-400" />}
          description={"2"}
          extra="Disponibles para asignacion"
          className={{
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emrald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Total Empleados"
          icon={<LuUsers size={28} className="text-white dark:text-purple-400" />}
          description={"15"}
          extra="Asignados a cargos"
          className={{
            container: "bg-purple-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Mayor demanda"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-orange-400" />}
          description="Cargo de Ventas"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-orange-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="size-5 text-blue-500 dark:text-blue-400"/>
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
