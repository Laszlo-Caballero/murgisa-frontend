import Card from "@/components/ui/card/Card";
import { FiPlus } from "react-icons/fi";
import {
  LuCircleCheckBig,
  LuFilter,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import { GrUserWorker } from "react-icons/gr";
import CrearPersonal from "@/modules/personal/crear/CrearPersonal";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { ApiRequest } from "@/libs/api";
import { Personal, Response } from "@/interfaces/responsefinal.interface";
import { PersonalCard } from "@/cards/PersonalCard";

export default async function PersonalPage() {
  const data = await ApiRequest<Response<Personal[]>>({
    metod: "get",
    endpoint: `personal`,
  });

  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col overflow-x-hidden dark:bg-gray-900">
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

        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[168%] -translate-x-[14%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50"
          modal={<CrearPersonal />}
        >
          <FiPlus size={15} />
          Nuevo Empleado
        </ButtonModal>
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
          <CardsLoad data={data?.data || []} render={PersonalCard} />
        </div>
      </div>
    </div>
  );
}
