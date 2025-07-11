"use client";
import { TipoMantenimiento } from "@/interfaces/responsefinal.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Button from "@/components/ui/button/Button";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

import {
    LuSquarePen,
    LuTrash2,
    LuEye,
    LuClock4,
    LuSettings,
} from "react-icons/lu";

export const TipoMantenimientoCards = (tipo: TipoMantenimiento) => {
    return(
        <CardInfo
            key={tipo?.tipoMantenimientoId}
            title={tipo?.nombre}
            icon={<LuSettings size={20} className="text-orange-600" />}
            description={tipo?.descripcion}
            span={tipo?.estado ? "Activo" : "Inactivo"}
            className={{
                container: "bg-white dark:bg-gray-800 dark:text-white",
                span: tipo?.estado
                ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/40 m-2"
                : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/40",
                header: {
                icon: "bg-orange-100 dark:bg-orange-500/10 rounded-md",
                },
            }}
            >
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                <LuClock4
                    size={15}
                    className="text-blue-600 dark:text-blue-300"
                />
                <p className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                    {tipo?.duracion} 
                </p>
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                Usado {"10"} veces
                </span>
            </div>
            <div className="flex items-center justify-between gap-x-2">
                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-600/20">
                <LuSquarePen size={15} />
                Editar
                </Button>
                <div className="flex items-center gap-x-3 py-1 px-3 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm text-sm">
                <DeleteModal id={tipo?.tipoMantenimientoId} endpoint="tipo-mantenimiento">
                <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
                </DeleteModal>
                Desactivar
                </div>
            </div>
        </CardInfo>
    )

}