"use client";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { Cargo } from "@/interfaces/responsefinal.interface";
import { AiOutlineCustomerService } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

export const CargoCard = (cargo: Cargo) => {
return (
        <CardInfo
        key={cargo.idCargo}
        title={cargo.cargo}
        icon={
            <AiOutlineCustomerService size={20} className="text-blue-400" />
        }
        className={{
            container: "bg-white dark:bg-gray-800  dark:text-white",
            header: {
            icon: "bg-blue-100 dark:bg-blue-900/50",
            },
            span: "bg-blue-100 text-blue-700 font-bold dark:bg-blue-600  dark:text-white",
        }}
        description={cargo.descripcion}
        span={cargo.estado ? "Activo" : "Inactivo"}
        >
        <div className="flex flex-col gap-y-2 ">
            <span className="flex items-center justify-between  dark:text-white">
            <p className="text-sm text-gray-600  dark:text-gray-500">
                Empleados
            </p>
            <p className="text-sm font-semibold flex items-center gap-x-1 ">
                <LuUsers /> {"10"}
            </p>
            </span>
        </div>
        </CardInfo>
    );
};
