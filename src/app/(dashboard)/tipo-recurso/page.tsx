import Card from "@/components/ui/card/Card";
import CrearTipoRecurso from "@/modules/tipo-recurso/crear/CrearTipoRecurso";
import { LuBox } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { ApiRequest } from "@/libs/api";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { Response, TipoRecurso } from "@/interfaces/responsefinal.interface";
import { TipoRecursoCards } from "@/cards/TipoRecursoCards";

export default async function TipoRecursoPage() {
  const data = await ApiRequest<Response<TipoRecurso[]>>({
    metod: "get",
    endpoint: "tipo-recurso",
  });

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100  dark:bg-gray-900 ">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600/90 dark:to-red-900">
        <span className=" bg-red-400/60 p-2 rounded-xl max-w-max mb-2 lg:p-3 dark:bg-red-400/30 ">
          <LuLayers className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white">
            Gestión de Tipos de Recursos
          </p>
          <p className="text-sm mt-1 text-white">
            Configura y gestiona las categorías de recursos del sistema
          </p>
        </div>
        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[20%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-red-500/70 mb-2 bg-red-400/40 dark:bg-red-500/50 lg:px-6"
          modal={<CrearTipoRecurso />}
        >
          <FiPlus size={15} />
          Nuevo Recurso
        </ButtonModal>
      </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Tipos"
          icon={
            <LuLayers size={28} className="text-white dark:text-emerald-400" />
          }
          description="10"
          extra="Configurados en el sistema"
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
          title="Tipos Activos"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-blue-400"
            />
          }
          description="9"
          extra="Disponibles para asignacion"
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
          title="Total Recursos"
          icon={
            <LuPackage size={28} className="text-white dark:text-purple-400" />
          }
          description="108"
          extra="Designados a servicios"
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
        />{" "}
        <Card
          title="Ultimo Tipo Creado"
          icon={<LuBox size={28} className="text-white dark:text-orange-400" />}
          description={"Herramientas"}
          extra="Recursos de mantenimiento"
          className={{
            container:
              "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
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
        <CardsLoad data={data?.data || []} render={TipoRecursoCards} />
      </div>
    </div>
  );
}
