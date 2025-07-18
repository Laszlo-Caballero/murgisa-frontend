import { LuGraduationCap } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

import CrearProfesion from "@/modules/profesion/crear/CrearProfesion";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import Badge from "@/components/ui/badge/Badge";
import { LuStar } from "react-icons/lu";
import { Profesion, Response } from "@/interfaces/responsefinal.interface";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { ApiRequest } from "@/libs/api";
import { ProfesionColumns } from "@/columns/ProfesionColumns";

interface ResponseProfesion {
  profesiones: Profesion[];
  total: number;
  profesionesActivas: number;
  personalAsignado: number;
  profesionMayor: Profesion | null;
}

export default async function ProfesionPage() {
  const data = await ApiRequest<Response<ResponseProfesion>>({
    metod: "get",
    endpoint: `profesion`,
  });

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 overflow-x-hidden dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-600 ">
        <span className="p-2 rounded-lg max-w-max mb-2 lg:p-3 bg-blue-300/30">
          <LuGraduationCap className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl">Gestión de Profesiones</p>
          <p className="text-sm mt-1">
            Administra las profesiones y criterios del sistema MURGISA
          </p>
        </div>

        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[14%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50"
          modal={<CrearProfesion />}
        >
          <FiPlus size={15} />
          Nueva Profesión
        </ButtonModal>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Profesiones"
          icon={
            <LuBookOpen size={28} className="text-white dark:text-blue-400" />
          }
          description={data?.data.total.toString()}
          extra="Registradas en la empresa"
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
          title="Profesiones Activas"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description={data?.data.profesionesActivas.toString() || "0"}
          extra="Disponibles para asignación"
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emrald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Personal Asignado"
          icon={
            <LuUsers size={28} className="text-white dark:text-purple-400" />
          }
          description={data?.data.personalAsignado.toString() || "0"}
          extra="Empleados con profesión"
          className={{
            container:
              "bg-purple-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Mayor Demanda"
          icon={
            <LuStar size={28} className="text-white dark:text-orange-400" />
          }
          description={data?.data.profesionMayor?.titulo || "N/A"}
          extra="Mayor cantidad de asignaciones"
          className={{
            container:
              "bg-orange-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400/80",
              description: "text-orange-900 text-xl dark:text-orange-400/80",
              extra: "text-orange-600 dark:text-orange-400/80",
            },
          }}
        />
      </div>

      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter
              size={20}
              className="size-5 text-blue-500 dark:text-blue-400"
            />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Utiliza los filtros para encontrar profesiones específicas de manera
            rápida
          </p>
        </section>
      </div>

      <div className="flex flex-col w-full rounded-md shadow-md p-4 bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl  dark:text-white ">
            Profesiones Registradas
          </p>
          <Badge className="bg-gray-50 text-xs text-gray-600 font-bold border-gray-300 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
            Total: {data?.data.total || 0}
          </Badge>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
            Gestiona todoas las profesiones registradas en el sistema
          </p>
        </div>

        <Table
          className="mt-4 bg-white w-full rounded-md "
          data={data?.data.profesiones || []}
          columns={ProfesionColumns}
        />
      </div>
    </div>
  );
}
