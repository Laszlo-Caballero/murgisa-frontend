"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { tipoRecursoData } from "@/data/tipoRecurso";
import CrearTipoRecurso from "@/modules/tipo-recurso/crear/CrearTipoRecurso";
import { LuBox } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";

export default function TipoRecursoPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100  dark:bg-gray-900 ">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearTipoRecurso />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-red-500 to-red-800 dark:from-red-700">
        <span className="bg-red-600 p-2 rounded-xl max-w-max mb-2 lg:p-3 ">
          <LuLayers className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white">Gestión de Tipos de Recursos</p>
          <p className="text-sm mt-1 text-white">
            Configura y gestiona las categorías de recursos del sistema
          </p>
        </div>
        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-red-700 hover:bg-red-400 mb-2"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Recurso
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Tipos"
          icon={<LuLayers size={28} className="text-white" />}
          description="10"
          extra="Configurados en el sistema"
          className={{
            container: "bg-emerald-100 shadow-lg  dark:bg-green-900/50 dark:shadow-lg dark:border dark:border-green-800",
            icon: "bg-emerald-500 rounded-full p-3",
            text: {
              title: "text-emerald-700  dark:text-emerald-300",
              description: "text-emerald-900 text-3xl  dark:text-emerald-100",
              extra: "text-emerald-600  dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Tipos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="9"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-blue-100 shadow-lg  dark:bg-blue-900/50 dark:shadow-lg dark:border dark:border-blue-800",
            icon: "bg-blue-500 rounded-full p-3",
            text: {
              title: "text-blue-700  dark:text-blue-300",
              description: "text-blue-900 text-3xl  dark:text-blue-100",
              extra: "text-blue-600  dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Total Recursos"
          icon={<LuPackage size={28} className="text-white" />}
          description="108"
          extra="Designados a servicios"
          className={{
            container: "bg-purple-100 shadow-lg  dark:bg-purple-900/50 dark:shadow-lg dark:border dark:border-purple-800",
            icon: "bg-purple-500 rounded-full p-3",
            text: {
              title: "text-purple-700  dark:text-purple-300",
              description: "text-purple-900 text-3xl  dark:text-purple-100",
              extra: "text-purple-600  dark:text-purple-400",
            },
          }}
        />{" "}
        <Card
          title="Ultimo Tipo Creado"
          icon={<LuBox size={28} className="text-white" />}
          description={"Herramientas"}
          extra="Recursos de mantenimiento"
          className={{
            container: "bg-orange-100 shadow-lg  dark:bg-orange-900/50 dark:shadow-lg dark:border dark:border-orange-800",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700  dark:text-orange-300",
              description: "text-orange-900 text-3xl  dark:text-orange-100",
              extra: "text-orange-600  dark:text-orange-400",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-3">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg  dark:text-white">
            <LuFilter size={20} className="text-red-600" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar tipo de recursos específicos de
            manera rápida
          </p>
        </section>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tipoRecursoData.map((tipo) => {
          return (
            <CardInfo
              key={tipo.idTipoRecurso}
              title={tipo.nombre}
              icon={<LuLayers size={20} className="text-red-600" />}
              description={tipo.descripcion}
              span={tipo.estado ? "Activo" : "Inactivo"}
              className={{
                container: "bg-white  dark:bg-gray-800  dark:text-white ",
                span: "bg-green-100 text-green-800 border border-green-300 dark:bg-green-600 dark:text-white",
                header: { icon: "bg-red-100 rounded-md dark:bg-red-600/20 " },
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 font-semibold">
                  ID: TIPO-00{tipo.idTipoRecurso}
                </span>
                <span className="flex items-center gap-x-2">
                  <LuPackage size={15} className="text-blue-600" />
                  <p className="text-xs text-gray-600 font-semibold dark:text-blue-500">
                    Total: {tipo.total} recursos
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-between gap-x-2 mt-4">
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-red-500 border border-red-300 hover:bg-red-50 dark:bg-transparent dark:border-red-600 dark:text-red-400">
                  <LuSquarePen size={15} />
                  Editar
                </Button>
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-transparent dark:border-gray-600 dark:text-gray-400 ">
                  <LuEye size={15} />
                  Desactivar
                </Button>
              </div>
            </CardInfo>
          );
        })}
      </div>
    </div>
  );
}
