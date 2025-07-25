import Card from "@/components/ui/card/Card";
import CrearTipoMantenimiento from "@/modules/tipoMantenimiento/CrearTipoMantenimiento";
import { Response, TipoMantenimiento } from "@/interfaces/responsefinal.interface";
import { ApiRequest } from "@/libs/api";
import CardsLoad from "@/components/share/cards-load/CardsLoad";

import {
  LuStar,
  LuSquarePen,
  LuEye,
  LuClock4,
  LuFilter,
  LuChartColumn,
  LuCircleCheckBig,
  LuSettings,
} from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { TipoMantenimientoCards } from "@/cards/TipoMantenimiento";

export default async function TipoMantenimientoPage() {
  const data = await ApiRequest<Response<TipoMantenimiento[]>>({
    metod: "get",
    endpoint: "tipo-mantenimiento",
  });
  console.log(data)
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-amber-500 to-orange-600/80 dark:from-amber-600">
        <span className=" p-2 rounded-xl max-w-max mb-2 lg:p-3 bg-orange-300/30">
          <LuSettings className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl">
            Gestión de Tipos de Mantenimiento
          </p>
          <p className="text-sm">
            Administra y configura los diferentes tipos de mantenimiento
            disponibles
          </p>
        </div>
        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[12%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-orange-400/70 mb-2 bg-orange-300/30  lg:px-6 "
          modal={<CrearTipoMantenimiento />}
        >
          <FiPlus size={15} />
          Nuevo Mantenimiento
        </ButtonModal>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Tipos"
          icon={
            <LuSettings size={28} className="text-white dark:text-blue-400" />
          }
          description="10"
          extra="Configurados"
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-500 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />

        <Card
          title="Tipos Activos"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description="9"
          extra="Disponibles"
          className={{
            container:
              "bg-emerald-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-emerald-400/10 dark:transition-all",
            icon: "bg-emerald-500 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />

        <Card
          title="Total Usos"
          icon={
            <LuChartColumn
              size={28}
              className="text-white dark:text-purple-400"
            />
          }
          description="108"
          extra="Aplicaciones"
          className={{
            container:
              "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-500 rounded-full p-3 dark:bg-purple-500/30",
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
          description="Electrico"
          extra="Mantenimiento más solicitado"
          className={{
            container:
              "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
            icon: "bg-orange-500 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>

      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-orange-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
            Utiliza los filtros para encontrar mantenimientos específicos de
            manera rápida
          </p>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardsLoad data={data?.data || []} render={TipoMantenimientoCards} />
      </div>
    </div>
  );
}
