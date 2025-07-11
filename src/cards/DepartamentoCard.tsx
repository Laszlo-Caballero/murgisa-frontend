"use client";

import CardInfo from "@/components/ui/card-info/CardInfo";
import { Departamento } from "@/interfaces/responsefinal.interface";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiWrenchBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";

export const DepartamentoCard = (departamento: Departamento) => {
    return (
        <CardInfo
            key={departamento.idDepartamento}
            title={departamento.titulo}
            icon={<PiWrenchBold size={20} className="text-blue-400" />}
            className={{
                container: "bg-white dark:bg-gray-800 dark:text-white",
                header: { icon: "bg-blue-100 dark:bg-blue-500/10" },
                span: "bg-blue-100 text-blue-700 font-bold dark:bg-blue-500/10 dark:text-blue-300",
            }}
            description={departamento.descripcion}
            span={departamento.estado ? "Activo" : "Inactivo"}
            >
            <div className="flex flex-col gap-y-2">
                <span className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Empleados
                </p>
                <p className="text-sm font-semibold flex items-center gap-x-1 dark:text-white">
                    <LuUsers /> 1
                </p>
                </span>
                <span className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Presupuesto
                </p>
                <p className="text-sm font-semibold flex items-center text-green-600 dark:text-green-400">
                    <MdOutlineAttachMoney />
                    {departamento.presupuesto}
                </p>
                </span>
            </div>
        </CardInfo>
    );
};
