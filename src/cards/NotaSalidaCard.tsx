"use client";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { NotaSalida } from "@/interfaces/responsefinal.interface";
import {
  LuCalendar,
  LuClipboardList,
  LuEye,
  LuSquarePen,
} from "react-icons/lu";

export const NotaSalidaCard = (nota: NotaSalida) => {
  return (
    <CardInfo
      key={nota?.idNotaSalida}
      title="Nota de Salida"
      icon={<LuClipboardList size={20} className="text-rose-400" />}
      className={{
        container: "bg-white  dark:bg-gray-800  dark:text-white ",
        header: {
          icon: "bg-red-100  dark:bg-rose-600/20",
          description: "font-semibold dark:bg-gray-800",
        },
        span: nota?.estado
          ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/40 m-2"
          : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/40",
      }}
      description={"ID: NS-00" + nota?.idNotaSalida?.toString()}
      span={nota?.estado ? "Activo" : "Inactivo"}
    >
      <div className="flex items-center justify-between ">
        <span className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-900 font-medium  dark:text-white">
            Fecha
          </p>
          <p className="text-sm text-gray-600 font-semibold flex items-center gap-x-1">
            <LuCalendar className="text-blue-600 " /> {nota.fecha.split("T")[0]}
          </p>
        </span>
        <span className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-900 font-medium  dark:text-white">
            Maquinaria
          </p>
          <p className="text-gray-600 text-sm">{nota?.recurso?.nombre}</p>
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-2 mt-4">
        <DeleteModal id={nota?.idNotaSalida} endpoint="nota-salida">
          <div className=" px-4 rounded-md  text-sm cursor-pointer flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">
            <LuEye size={15} />
            Desactivar
          </div>
        </DeleteModal>
      </div>
    </CardInfo>
  );
};
