import Card from "@/components/ui/card/Card";
import { PiToolbox } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import CrearCargo from "@/modules/cargo/crear/CrearCargo";
import { LuCircleCheckBig, LuFilter, LuUsers } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { ApiRequest } from "@/libs/api";
import { Cargo, Response } from "@/interfaces/responsefinal.interface";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { CargoCard } from "@/cards/CargoCard";

interface ResponseCargo {
  cargos: Cargo[];
  total: number;
  activos: number;
  usuarios: number;
}

export default async function CargoPage() {
  const data = await ApiRequest<Response<ResponseCargo>>({
    metod: "get",
    endpoint: `cargo`,
  });

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50  dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-600">
        <span className=" p-2 rounded-lg max-w-max mb-2 lg:p-3 bg-blue-400/30 ">
          <PiToolbox className="text-white size-8 lg:size-10 " />
        </span>
        <div className="flex flex-col ">
          <p className="font-bold text-3xl text-white ">Gestión de Cargos</p>
          <p className="text-sm  text-white">
            Administra los puestos de trabajo y roles organizacionales
          </p>
        </div>
        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[22%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50 "
          modal={<CrearCargo/>}
        >
          <FiPlus size={15} />
          Nuevo Cargo
        </ButtonModal>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4  dark:bg-gray-900">
        <Card
          title="Total Cargos"
          icon={
            <PiToolbox size={28} className="text-white dark:text-blue-300" />
          }
          description={data?.data.total.toString()}
          extra="Registrados en la empresa"
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
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
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-green-400"
            />
          }
          description={data?.data.activos.toString()}
          extra="Disponibles para asignacion"
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
          title="Total Empleados"
          icon={
            <LuUsers size={28} className="text-white dark:text-purple-400" />
          }
          description={data?.data.usuarios.toString()}
          extra="Asignados a cargos"
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
          title="Mayor demanda"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-orange-400"
            />
          }
          description="Cargo de Gerente"
          extra="Disponibles para asignacion"
          className={{
            container:
              "bg-orange-100 shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
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
            <LuFilter
              size={20}
              className="size-5 text-blue-500 dark:text-blue-400"
            />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar cargos específicos de manera
            rápida
          </p>
        </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardsLoad data={data?.data.cargos || []} render={CargoCard} />
      </div>
      </div>
    </div>
  );
}
