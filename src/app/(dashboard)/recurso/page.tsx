import ButtonModal from "@/components/share/button-modal/ButtonModal";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import CrearRecurso from "@/modules/recurso/crear/CrearRecurso";

import { LuCircleCheckBig } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { PiMoneyWavyLight } from "react-icons/pi";
import { ApiRequest } from "@/libs/api";
import { Recurso } from "@/interfaces/responsefinal.interface";
import { Response } from "@/interfaces/responsefinal.interface";
import { RecusoColumns } from "@/columns/RecursoColumns";

export default async function RecursoPage() {
  const data = await ApiRequest<Response<Recurso[]>>({
    metod: "get",
    endpoint: "recurso",
  });
  console.log(data)
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600/90 dark:to-red-900">
        <span className="bg-red-400/60 p-2 rounded-xl max-w-max mb-2 lg:p-3 dark:bg-red-400/50 ">
          <LuPackage className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white ">
          <h1 className="font-bold text-3xl">Gestión de Recursos</h1>
          <p className="text-sm mt-1 ">
            Administra el inventario de recursos, equipos y materiales
          </p>
        </div>s
        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[20%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-red-500/70 mb-2 bg-red-400/40 dark:bg-red-500/50 lg:px-6"
          modal={<CrearRecurso/>}
        >
          <FiPlus size={15} />
          Nuevo Recurso
        </ButtonModal>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <Card
          title="Total"
          icon={<LuPackage size={28} className="text-white dark:text-blue-400" />}
          description="20"
          extra="Recursos en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30 shadow-xl",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-800 text-xs dark:text-blue-400",
            },
          }}
        />

        <Card
          title="Disponibles"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-emerald-400" />}
          description="11"
          extra="Listo para ser asignado"
          className={{
            container: "bg-emerald-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-emerald-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30 shadow-xl",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-800 text-xs dark:text-emerald-400",
            },
          }}
        />

        <Card
          title="En Uso"
          icon={<LuClock4 size={28} className="text-white dark:text-purple-400" />}
          description="7"
          extra="Asignado y en funcionamiento"
          className={{
            container: "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30 shadow-xl",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-800 text-xs dark:text-purple-400",
            },
          }}
        />

          <Card
            title="En Mantenimiento"
            icon={<LuWrench size={28} className="text-white dark:text-orange-400" />}
            description="2"
            extra="Recurso en revisión técnica"
            className={{
              container: "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
              icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30 shadow-xl",
              text: {
                title: "text-orange-700 dark:text-orange-400",
                description: "text-orange-900 text-3xl dark:text-orange-400",
                extra: "text-orange-800 text-xs dark:text-orange-400",
              },
            }}
          />

      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-red-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar recursos específicos de manera
            rápida
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full rounded-md shadow-md p-4 bg-white dark:bg-gray-800 dark:shadow-lg dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full ">
          <p className="font-medium text-black text-xl dark:text-white">Recursos Registrados</p>
          <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los recursos registrados en el sistema
          </p>
        </div>

        <Table
          className="mt-4 bg-white w-full rounded-md "
          data={data?.data || []}
          columns={RecusoColumns}
        />
      </div>
    </div>
  );
}
