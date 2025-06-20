import CardInfoSkeleton from "@/components/skeletons/card-info-skeleton/CardInfoSkeleton";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { Departamento } from "@/interfaces/responsefinal.interface";
import React from "react";
import { LuFilter, LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiWrenchBold } from "react-icons/pi";

interface ListarDepartamentosProps {
  data?: Departamento[];
  isLoading?: boolean;
}

export default function ListarDepartamentos({
  data,
  isLoading,
}: ListarDepartamentosProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4 ">
      <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white dark:bg-gray-800">
        <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
          <LuFilter size={20} className="text-blue-500" />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
          Utiliza los filtros para encontrar departamentos específicos de manera
          rápida
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <CardInfoSkeleton key={index} />
          ))}

        {data?.map((forma) => (
          <CardInfo
            key={forma.idDepartamento}
            title={forma.titulo}
            icon={<PiWrenchBold size={20} className="text-blue-400" />}
            className={{
              container: "bg-white dark:bg-gray-800 dark:text-white",
              header: { icon: "bg-blue-100 dark:bg-blue-500/10" },
              span: "bg-blue-100 text-blue-700 font-bold dark:bg-blue-500/10 dark:text-blue-300",
            }}
            description={forma.descripcion}
            span={forma.estado ? "Activo" : "Inactivo"}
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
                  Comisión
                </p>
                <p className="text-sm font-semibold flex items-center text-green-600 dark:text-green-400">
                  <MdOutlineAttachMoney />
                  {forma.presupuesto}
                </p>
              </span>
            </div>
          </CardInfo>
        ))}
      </div>
    </div>
  );
}
