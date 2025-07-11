import { TipoServicio } from "@/interfaces/responsefinal.interface";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

import {
    LuBriefcase,
    LuChartColumnIncreasing,
    LuEye,
    LuSquarePen,
    LuTrash2

} from "react-icons/lu";

export const TipoServicioCards = (tipo: TipoServicio) => {
return(
    <CardInfo
        key={tipo?.idTipoServicio}
        title={tipo?.nombre}
        icon={
            <LuBriefcase
            size={20}
            className="text-purple-600 dark:text-purple-400"
            />
        }
        className={{
            container:
            "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
            header: {
            title: "text-md text-gray-900 dark:text-white",
            description: "text-sm text-gray-600 dark:text-gray-300",
            icon: "bg-purple-100 dark:bg-purple-500/10 rounded-lg",
            },
            span: tipo?.estado
                ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/40 m-2"
                : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/40",
        }}
        description={tipo?.descripcion}
        span={tipo?.estado ? "Activo" : "Inactivo"}
        >
        <div className="flex items-center justify-between gap-x-4">
            <div className="flex flex-col gap-y-2">
            <span className="flex items-center gap-x-2">
                <LuChartColumnIncreasing
                size={15}
                className="text-yellow-500 dark:text-yellow-300"
                />
                <p className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                {0} Asignaciones
                </p>
            </span>
            </div>
        </div>
        <div className="flex items-center justify-between gap-x-2">
            <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-600/20">
            <LuSquarePen size={15} />
            Editar
            </Button>
            <div className="flex items-center gap-x-3 py-1 px-3 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm text-sm">
            <DeleteModal id={tipo?.idTipoServicio} endpoint="tipo-servicio">
            <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
            </DeleteModal>
            Desactivar
            </div>
        </div>
    </CardInfo>
)
}