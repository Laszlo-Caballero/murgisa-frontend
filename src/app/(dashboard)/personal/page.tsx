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
    <div className="w-full p-8 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearPersonal />
        </Modal>
      )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-600 p-3 rounded-lg">
            <GrUserWorker size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Personal</p>
            <p className="text-sm">
              Administra la información de los empleados de MURGISA
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
          Nuevo Empleado
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
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
        <section className="flex w-full flex-col p-4 rounded-lg shadow">
          <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
            <LuFilter  className="text-blue-600"/>
            Filtros
          </span>
        </section>
        <div className="grid grid-cols-3 gap-4">
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
