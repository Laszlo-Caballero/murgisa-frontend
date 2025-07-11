import { FiPlus } from "react-icons/fi";
import {
  LuShield,
  LuCircleCheck,
  LuCirclePlay,
  LuTriangleAlert,
  LuCirclePlus,
} from "react-icons/lu";
import { GrHostMaintenance, GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDateRange, MdLowPriority } from "react-icons/md";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Modal from "@/components/ui/modal/Modal";
import Tabs from "@/components/ui/tabs/Tabs";

import ListarPreventivos from "@/modules/preventivo/listar/listar";
import ListarCalendario from "@/modules/preventivo/calendario/calendario";

import { preventivoData } from "@/data/preventivo";
import CrearPreventivo from "@/modules/preventivo/Crear/CrearPreventivo";
import { ApiRequest } from "@/libs/api";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { MantenimientoPreventivo, Response } from "@/interfaces/responsefinal.interface";


export default async function MantenimientoPreventivoPage() {
 const data = await ApiRequest<Response<MantenimientoPreventivo[]>>({
    metod: "get",
    endpoint: "mantenimiento-preventivo",
  });
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-amber-500 to-orange-600/80 dark:from-amber-600">
          <span className="p-2 rounded-xl max-w-max mb-2 lg:p-3 bg-orange-300/30">
            <LuShield className="text-white size-8 lg:size-10" />
          </span>
          <div className="flex flex-col text-white">
            <p className="font-bold text-3xl">Mantenimiento Preventivo</p>
            <p className="text-sm mt-1 text-white">
              Gestiona y monitorea los mantenimientos preventivos programados
            </p>
          </div>
          <ButtonModal
            className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[10%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-amber-600 mb-2 bg-orange-300/30  lg:px-6 "
              modal={<CrearPreventivo />}
              >
            <FiPlus size={15} />
            Planificar Mantenimiento
          </ButtonModal>
        </header>
      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total"
          icon={<LuShield size={28} className="text-white dark:text-blue-400" />}
          description="10"
          extra="Mantenimientos planificados en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-800 text-xs dark:text-blue-400",
            },
          }}
        />

        <Card
          title="Completados"
          icon={<LuCircleCheck size={28} className="text-white dark:text-green-400" />}
          description="6"
          extra="Correctamente por los responsables."
          className={{
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-400",
              description: "text-green-800 text-3xl dark:text-green-400",
              extra: "text-green-800 text-xs dark:text-green-400",
            },
          }}
        />

        <Card
          title="En Progreso"
          icon={<LuCirclePlay size={28} className="text-white dark:text-orange-400" />}
          description="3"
          extra="Están siendo trabajadas actualmente."
          className={{
            container: "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-800 text-xs dark:text-orange-400",
            },
          }}
        />

      <Card
        title="Atrasados"
        icon={<LuTriangleAlert size={28} className="text-white dark:text-red-400" />}
        description="1"
        extra="No se completaron en la fecha estimada"
        className={{
          container: "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-400/10 dark:transition-all",
          icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30",
          text: {
            title: "text-red-700 dark:text-red-400",
            description: "text-red-900 text-3xl dark:text-red-400",
            extra: "text-red-900 text-xs dark:text-red-400",
          },
        }}
      />

      </div>

 
      <Tabs
        headers={["Lista de Mantenimientos", "Vista Calendario"]}
        className="mt-6 dark:text-orange-400"
      >
        <ListarPreventivos data={data?.data||[]} />
        <ListarCalendario data={preventivoData} />
      </Tabs>
    </div>
  );
}
