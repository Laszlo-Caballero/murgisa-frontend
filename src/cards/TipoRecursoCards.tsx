"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { TipoRecurso } from "@/interfaces/responsefinal.interface";
import { LuTrash2, LuLayers, LuPackage, LuSquarePen } from "react-icons/lu";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

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
        span: tipo?.estado
                ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/40 m-2"
                : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/40",
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
      <div className="flex items-center justify-between gap-x-2">
          <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-600/20">
          <LuSquarePen size={15} />
          Editar
          </Button>
          <div className="flex items-center gap-x-3 py-1 px-3 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm text-sm">
          <DeleteModal id={tipo?.idTipoRecurso} endpoint="tipo-recurso">
          <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
          </DeleteModal>
          Desactivar
          </div>
      </div>
    </CardInfo>
  );
};
