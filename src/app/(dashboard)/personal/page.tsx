"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { Personal } from "@/interfaces/response.interface";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import {
  LuBriefcase,
  LuCircleCheckBig,
  LuFilter,
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
import { personalData } from "@/data/personal";


export default function PersonalPage() {
  const [showModal, setShowModal] = useState(false);
  // const { data, isLoading } = useQuery<Personal[]>({
  //   queryFn: async () => {
  //     const response = await axios.get(`${env.url_api}/personal`);
  //     return response.data;
  //   },
  // });

  return (
    <div className="w-full h-full p-9 bg-gray-50 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearPersonal />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-blue-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <GrUserWorker className="text-white size-8 lg:size-10"  />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Personal</p>
            <p className="text-sm">
              Administra la información de los empleados de MURGISA
            </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2"
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
          icon={<LuUsers size={28} className="text-white" />}
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
          title="Empleados Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="3"
          extra="Disponibles para asignación"
          className = {{ 
            container: "bg-purple-50 shadow-lg" , 
            icon: "bg-purple-600 rounded-full p-3", 
            text:{title:"text-purple-700" ,
            description:"text-purple-900 text-3xl" ,
            extra: "text-purple-600"} }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-lg shadow-md bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-md">
            <LuFilter size={20} className="text-blue-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar trabajadores específicos de manera
            rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* {isLoading &&
            Array.from({ length: 3 }).map((_, index) => {
              return <CardInfoSkeleton key={index} />;
            })} */}

          {personalData?.map((empleado) => {
            return (
              <CardInfo
                key={empleado.idPersonal}
                title={`${empleado.nombre} ${empleado.apellido_paterno} ${empleado.apellido_materno}`}
                icon={<p>{empleado.nombre.split("")[0]}</p>}
                className={{
                  container:"bg-white",
                  header: {
                    icon: "bg-blue-100 text-center p-0 size-7 flex items-center justify-center uppercase",
                  },
                  span: "bg-blue-100 text-blue-600 font-bold",
                }}
                description={empleado.cargo}
                span={empleado.estado ? "Activo" : "Inactivo"}
              >
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col border-b border-gray-200 pb-2 gap-y-2">
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdNumbers /> Numero de documento:{" "}
                      <p className="font-semibold text-black">
                        {empleado.numeroDocumento}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdOutlineEmail /> Correo:{" "}
                      <p className="font-semibold text-black">
                        {empleado?.correo || "No disponible"}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuPhone /> Telefono:{" "}
                      <p className="font-semibold text-black">
                        {empleado.telefono}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdMoneyOff /> Sueldo:{" "}
                      <p className="font-semibold text-green-600">
                        {empleado.sueldo}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuCalendar /> Ingreso:{" "}
                      <p className="font-semibold text-black">
                        {empleado.fechaIngreso.split("T")[0]}
                      </p>
                    </span>

                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuBriefcase /> Profesion:{" "}
                      <p className="font-semibold text-black">
                        {empleado.profesion || "No disponible"}
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
