import { FiPlus } from "react-icons/fi";
import {
  LuClipboardList,
  LuCalendar,
  LuFilter,
  LuCircleCheckBig,
} from "react-icons/lu";
import Card from "@/components/ui/card/Card";
import { notaSalidaData } from "@/data/notaSalida";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import CrearNotaSalida from "@/modules/nota-salida/crear/CrearModal";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { ApiRequest } from "@/libs/api";
import { NotaSalida, Response } from "@/interfaces/responsefinal.interface";
import { NotaSalidaCard } from "@/cards/NotaSalidaCard";

export default async function NotasDeSalidaPage() {
  const data = await ApiRequest<Response<NotaSalida[]>>({
    metod: "get",
    endpoint: "nota-salida",
  });

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100  dark:bg-gray-900 ">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-rose-500/80 to-rose-700/80 dark:from-rose-500/80 dark:to-rose-800/90">
        <span className="dark:bg-rose-400/40 p-2 rounded-xl max-w-max mb-2 lg:p-3 bg-rose-400">
          <LuClipboardList className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white">Notas de Salida</p>
          <p className="text-sm text-white">
            Gestiona las notas de salida registradas en el sistema
          </p>
        </div>

        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[10%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-rose-400/60 mb-2 bg-rose-400/40 dark:hover:bg-rose-500/60"
          modal={<CrearNotaSalida />}
        >
          <FiPlus size={15} />
          Nueva Nota de Salida
        </ButtonModal>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Notas"
          icon={
            <LuClipboardList
              size={28}
              className="text-white dark:text-blue-400"
            />
          }
          description={notaSalidaData?.length.toString() || "0"}
          extra="Registradas en el sistema"
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
          title="Notas Activas"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-purple-400"
            />
          }
          description={"14"}
          extra="Habilitadas y disponibles"
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
      </div>

      <div className="py-6 flex flex-col gap-y-6">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-pink-600" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar notas de salida programadas de
            manera rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardsLoad data={data?.data || []} render={NotaSalidaCard} />
        </div>
      </div>
    </div>
  );
}
