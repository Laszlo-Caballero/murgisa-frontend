"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { TipoRecurso } from "@/interfaces/responsefinal.interface";
import { LuEye, LuLayers, LuPackage, LuSquarePen } from "react-icons/lu";

export const TipoRecursoCards = (tipo: TipoRecurso) => {
  return (
    <CardInfo
      key={tipo?.idTipoRecurso}
      title={tipo?.nombre}
      icon={<LuLayers size={20} className="text-red-500" />}
      description={tipo?.descripcion}
      span={tipo?.estado ? "Activo" : "Inactivo"}
      className={{
        container: "bg-white  dark:bg-gray-800  dark:text-white ",
        span: "bg-green-100 text-green-800 border border-green-300 dark:bg-green-600 dark:text-white",
        header: { icon: "bg-red-100 rounded-md dark:bg-red-600/20 " },
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600 font-semibold">
          ID: TIPO-00{tipo?.idTipoRecurso}
        </span>
        <span className="flex items-center gap-x-2">
          <LuPackage size={15} className="text-blue-600" />
          <p className="text-xs text-gray-600 font-semibold dark:text-blue-500">
            Total: {0} recursos
          </p>
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-2 mt-4">
        <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-500 hover:bg-red-100 dark:hover:bg-red-600/20">
          <LuSquarePen size={15} />
          Editar
        </Button>
        <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">
          <LuEye size={15} />
          Desactivar
        </Button>
      </div>
    </CardInfo>
  );
};
