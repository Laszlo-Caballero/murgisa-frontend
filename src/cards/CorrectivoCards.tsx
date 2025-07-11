"use client";

import { MantenimientoCorrectivo } from "@/interfaces/responsefinal.interface";
import Badge from "@/components/ui/badge/Badge";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Button from "@/components/ui/button/Button";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

import { LuWrench, LuTrash2, LuSquarePen } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

export const CorrectivoCards = (correctivo: MantenimientoCorrectivo) => {
    return(
        <CardInfo
            title={correctivo?.recurso.nombre}
            icon={<LuWrench size={20} className="text-orange-500 " />}
            description=""
            className={{
                container: "bg-white dark:bg-gray-800 dark:text-gray-300",
                header: {
                icon: "bg-orange-100 rounded-lg p-2  dark:bg-orange-600/20",
                },
                span: correctivo?.estado
                ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/40 m-2"
                : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-500/10 dark:text-red-300 dark:border-red-400/40",
            }}
            span={correctivo?.estado ? "Activo" : "Inactivo"}
            >
            <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-y-2 px-2">
                <span className="flex items-center gap-x-2 ">
                    <LuCalendar size={16} className="text-red-500" />
                    <p className="text-m text-gray-700 dark:text-gray-500">
                    {new Date(correctivo?.fechaInicio).toLocaleDateString(
                        "es-ES"
                    )}
                    </p>
                </span>
                <span className="flex items-center gap-x-2">
                    <LuClock4 size={16} className="text-blue-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                    {correctivo?.tipo.map((tipo) => tipo.nombre).join(", ")}
                    </p>
                </span>
                </div>
                <div className="flex flex-col gap-y-2 px-2">
                <span className="flex items-center gap-x-2">
                    <LuUsers size={16} className="text-green-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                    {correctivo?.personal.nombre}
                    </p>
                </span>
                <span className="flex items-center gap-x-2">
                    <LuWrench size={16} className="text-purple-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                    {correctivo?.tipo.map((tipo) => tipo.nombre).join(", ")}
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
                <DeleteModal id={correctivo?.mantenimientoCorrectivoId} endpoint="mantenimiento-correctivo">
                <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
                </DeleteModal>
                Desactivar
                </div>
            </div>
        </CardInfo>
    )
}