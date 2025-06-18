"use client";
import { LuGraduationCap } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

import Modal from "@/components/ui/modal/Modal";
import CrearProfesion from "@/modules/profesion/crear/CrearProfesion";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import { profesionData } from "@/data/profesion";
import { useState } from "react";
import Badge from "@/components/ui/badge/Badge";

export default function ProfesionPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearProfesion />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
          <span className="bg-blue-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
            <LuGraduationCap className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Profesiones</p>
            <p className="text-sm mt-1">
              Administra las profesiones y criterios del sistema MURGISA
            </p>
        </div>

        <Button className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2" 
          onClick={() => {
            setShowModal(true);
          }}>
          <FiPlus size={15} />
          Nueva Profesión
        </Button>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Profesiones"
          icon={<LuBookOpen size={28} className="text-white" />}
          description="5"
          extra="Registradas en la empresa"
          className = {{ container: "bg-blue-50 shadow-lg" , icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
        />
        <Card
          title="Profesiones Activas"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="4"
          extra="Disponibles para asignación"
          className = {{ container: "bg-purple-100 shadow-md", icon: "bg-purple-600 rounded-full p-3",text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" ,extra: "text-purple-600"}}}
        />
        <Card
          title="Personal Asignado"
          icon={<LuUsers size={28} className="text-white" />}
          description="31"
          extra="Empleados con profesión"
          className = {{ container: "bg-orange-100 shadow-md", icon: "bg-orange-600 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" ,extra: "text-orange-600"} }}

        />
      </div>
      
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-lg bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-md">
            <LuFilter size={20} className="text-blue-700"/>
              Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar profesiones específicas de manera rápida</p>
        </section>
      </div>

      <div className="flex flex-col w-full rounded-md shadow-md p-4 bg-white">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium text-black text-xl">Profesiones Registradas</p>
            <p className="text-sm text-gray-500 mt-1">Gestiona las profesiones disponibles en el sistema</p>
          </div>
          <div>
            <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1"> Total: 5 </span>
          </div>
        </div>

        { <Table className="mt-4 bg-white w-full rounded-md " data={profesionData} columns={[
          {
            header: "Profesión",
            cell: (props) => {
              return (
              <div className="flex items-start gap-x-3">
                <span className="bg-blue-100 p-2 rounded-xl">
                  <LuGraduationCap size={15} className="text-blue-600" />
                </span>
                <div className="flex flex-col">
                  <p className="font-semibold text-sm">{props.row.titulo}</p>
                  <p className="text-xs text-gray-600">ID: PROF-00{props.row.idProfesion}</p>
                </div>
              </div>

              );
            },
          },
          {
            header: "Descripción ",
            cell: (props) => {
              return (
                <p className="text-xs text-gray-600">{props.row.descripcion}</p>
              );
            }
          },
          {
            header: "Personal",
            cell: (props) => {
              return (
                <div className="flex items-center gap-x-2">
                  <LuUsers size={15} className="text-gray-500" />
                  <span className="text-sm font-bold">{props.row.cantidad}</span>
                  <p className="text-xs text-gray-500"> empleados</p>
                </div>
              );
            }
          },
          {
            header: "Estado",
            cell: (props) => {
              return (
                <Badge className="bg-green-100 border-green-300 text-green-800 font-semibold">
                  Activo
                </Badge>
              );
            },
          },
          {
            header: "Acciones",
            cell: (props) => {
            return (
                <span className="flex items-center gap-x-4">
                    <LuSquarePen className="text-red-500" />
                    <LuTrash2 className="text-gray-900"/>
                </span>
                );
            },
          }
          
          
        ]}>
          
        </Table> }
      </div>
    </div>
  );
}
