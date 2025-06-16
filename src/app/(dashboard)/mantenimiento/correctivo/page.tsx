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
import Input from "@/components/ui/input/Input";

import { useState } from "react";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";

import { LuDollarSign } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinArea } from "react-icons/pi";
import Select from "@/components/ui/select/Select";

export default function MantenimientoCorrectivo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-[800px] bg-white p-6 rounded-lg shadow-lg">
            <header className="flex items-center gap-x-3">
              <PiWrenchBold size={24} className="text-orange-600" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">
                  Agregar Mantenimiento Correctivo
                </p>
                <p className="text-sm text-gray-500">
                  Completa los datos para registrar un nuevo mantenimiento
                  correctivo en el sistema
                </p>
              </div>
            </header>
            <div className="grid grid-cols-1 gap-4">
              <Select
                label="Categoria"
                icon={<PiWrenchBold />}
                placeholder="Selecciona un Tipo de Mantenimiento Correctivo"
                options={[{ value: "1", label: "Construcción" }]}
              ></Select>
              <Input
                label="Nombre de la Maquinaria"
                icon={<PiCity />}
                placeholder="Ej: Compresor Industrial CI-001"
              />
              <Select
                label="Tecnico"
                icon={<FaRegUser />}
                placeholder="Selecciona un Tecnico"
                options={[{ value: "1", label: "Paco" }]}
              ></Select>
              <Input
                label="Ubicacion"
                icon={<PiMapPinArea />}
                placeholder="Ej: El Porvenir"
              />
              <Input
                label="Precio"
                icon={<LuDollarSign />}
                placeholder="Ej: $/ 200"
              />
            </div>
            <div>
              <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Mantenimiento Correctivo
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-orange-500 p-3 rounded-xl">
            <PiWrenchBold size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Mantenimiento Correctivo</p>
            <p className="text-sm mt-1">
              Gestiona y monitorea los mantenimientos preventivos programados
            </p>
          </div>
        </div>
        <Button
          className="flex items-center gap-x-3 py-2 font-semibold mt-4 bg-orange-500 text-white shadow-md hover:bg-orange-400"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nueva Orden
        </Button>
      </header>
      <div className="grid grid-cols-5 items-center mt-6 gap-x-4">
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
          icon={<LuShield size={28} className="text-yellow-600" />}
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
      <Tabs headers={["Lista de Mantenimiento", "Calendario"]} className="mt-6">
        <div className="py-4 flex w-full flex-col gap-y-4">
          <div className="py-4 flex w-full flex-col gap-y-4">
            <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
              <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                <LuFilter size={20} className="text-orange-700" />
                Filtros de Búsqueda
              </span>
              <p className="text-sm mt-1 text-gray-500">
                Utiliza los filtros para encontrar mantenimientos programados de
                manera rápida
              </p>
            </section>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <CardInfo
              key={"UWU"}
              title={"2024-001"}
              icon={
                <HiOutlineWrenchScrewdriver
                  size={20}
                  className="text-orange-600"
                />
              }
              className={{
                container: "bg-white",
                header: {
                  title: "text-md",
                  description: "text-xl text-black font-semibold",
                  icon: "bg-orange-100 rounded-lg",
                },
                span: "bg-green-100 text-green-700 border border-green-300 font-semibold ",
              }}
              description={"Reparacion de Motor Principal"}
              span={"En Proceso"}
            >
              <div>
                <p className="text-s text-gray-500">
                  Reparación urgente del motor principal del compresor debido a
                  sobrecalentamiento
                </p>
              </div>
              <div className="flex justify-between gap-x-4 flex-col gap-y-4 py-4  ">
                <span className="flex items-center gap-x-2">
                  <PiCity size={15} className="text-blue-600" />
                  <p className="text-s text-blue-600 font-semibold flex items-center gap-x-1">
                    Maquinaria:{" "}
                    <span className="text-black">
                      {"Compresor Industrial CI-001"}
                    </span>
                  </p>
                </span>

                <span className="flex items-center gap-x-2">
                  <FaRegUser size={15} className="text-purple-600" />
                  <p className="text-S text-purple-600 font-semibold">
                    Tecnico: <span className="text-black">{"Paco"}</span>
                  </p>
                </span>
                <span className="flex items-center gap-x-2">
                  <PiMapPinArea size={15} className="text-yellow-500" />
                  <p className="text-S text-yellow-600 font-semibold">
                    Ubicacion:{" "}
                    <span className="text-black">
                      {"Plaza Principal - Sector A"}
                    </span>
                  </p>
                </span>
                <span className="flex items-center gap-x-2 ">
                  <LuDollarSign size={15} className="text-green-600" />
                  <p className="text-S text-green-600 font-semibold flex items-center gap-x-1">
                    Precio: <span className="text-black">{"S/. 200"}</span>
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-between gap-x-3 mt-4">
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100">
                  <LuSquarePen size={15} />
                  Editar
                </Button>
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100">
                  <LuEye size={15} />
                  Ver
                </Button>
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100">
                  <FaRegTrashAlt size={15} className="text-red-600" />
                </Button>
              </div>
            </CardInfo>
          </div>
        </div>
        <div>2</div>
      </Tabs>
    </div>
  );
}
