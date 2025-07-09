"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import {
  LuBriefcase,
  LuCircleCheckBig,
  LuFilter,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import { GrUserWorker } from "react-icons/gr";
import { MdNumbers } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdMoneyOff } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { useState } from "react";
import { useQuery } from "@/hooks/useQuery";
import { env } from "@/config/env";
import CardInfoSkeleton from "@/components/skeletons/card-info-skeleton/CardInfoSkeleton";
import Modal from "@/components/ui/modal/Modal";
import CrearPersonal from "@/modules/personal/crear/CrearPersonal";
import { Personal } from "@/interfaces/responsefinal.interface";

export default function PersonalPage() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useQuery<Personal[]>({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/personal`);
      return response.data;
    },
  });

  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col overflow-x-hidden dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearPersonal />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-900 dark:from-blue-600 ">
        <span className="p-2 rounded-lg max-w-max mb-2 lg:p-3 bg-blue-300/30">
          <GrUserWorker className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl">Gestión de Personal</p>
          <p className="text-sm">
            Administra la información de los empleados de MURGISA
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[168%] -translate-x-[14%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nuevo Empleado
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Empleados"
          icon={<LuUsers size={28} className="text-white dark:text-blue-400" />}
          description="18"
          extra="Registrados en el sistema"
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Empleados En Servicio"
          icon={
            <GrUserWorker
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description="6"
          extra="Realizando su labor"
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Empleados Activos"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-purple-400"
            />
          }
          description="15"
          extra="Disponibles para asignación"
          className={{
            container:
              "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Sueldo Promedio"
          icon={
            <LuTrendingUp
              size={28}
              className="text-white dark:text-orange-400"
            />
          }
          description="S/. 1500"
          extra="Sueldo promedio de empleados"
          className={{
            container:
              "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-blue-500 dark:text-blue-400" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Utiliza los filtros para encontrar trabajadores específicos de
            manera rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => {
              return <CardInfoSkeleton key={index} />;
            })}

          {data?.map((empleado) => {
            return (
              <CardInfo
                key={empleado.idPersonal}
                title={`${empleado.nombre} ${empleado.apellido_paterno} ${empleado.apellido_materno}`}
                icon={<p>{empleado.nombre.split("")[0]}</p>}
                className={{
                  container:
                    "bg-white dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-200 ",
                  header: {
                    icon: "bg-blue-100 text-center p-0 size-7 flex items-center justify-center uppercase dark:bg-blue-500/30",
                    description: "dark:text-gray-400",
                  },
                  span: "bg-green-100 text-green-600 font-bold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
                }}
                description={empleado.cargo.cargo}
                span={empleado.estado ? "Activo" : "Inactivo"}
              >
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col border-b border-gray-200 pb-2 gap-y-2 dark:border-gray-600">
                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <MdNumbers /> Numero de documento:{" "}
                      <p className="font-semibold text-black dark:text-gray-500">
                        {empleado.numeroDocumento}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <MdOutlineEmail /> Correo:{" "}
                      <p className="font-semibold text-black dark:text-gray-500">
                        {empleado?.usuario.correo || "No disponible"}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <LuPhone /> Telefono:{" "}
                      <p className="font-semibold text-black dark:text-gray-500">
                        {empleado.telefono}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <MdMoneyOff /> Sueldo:{" "}
                      <p className="font-semibold text-green-600">
                        {empleado.sueldo}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <LuCalendar /> Ingreso:{" "}
                      <p className="font-semibold text-black dark:text-gray-500">
                        {empleado.fechaIngreso.split("T")[0]}
                      </p>
                    </span>

                    <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
                      <LuBriefcase /> Profesion:{" "}
                      <p className="font-semibold text-black dark:text-gray-500">
                        {empleado.profesion.titulo || "No disponible"}
                      </p>
                    </span>
                  </div>
                </div>
              </CardInfo>
            );
          })}
        </div>
      </div>
    </div>
  );
}
