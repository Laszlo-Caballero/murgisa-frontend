"use client";

import CardsLoad from "@/components/share/cards-load/CardsLoad";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { TipoServicio } from "@/interfaces/responsefinal.interface";
import {
  LuBriefcase,
  LuChartColumnIncreasing,
  LuEye,
  LuFilter,
  LuSquarePen,
} from "react-icons/lu";

interface ListarTipoServicioProps {
  data: TipoServicio[];
}

export default function ListarTipoServicio({ data }: ListarTipoServicioProps) {
  return (
    <div className="py-3 flex w-full flex-col gap-y-4">
      <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800">
        <span className="flex items-center gap-x-2 font-semibold text-black dark:text-white text-lg">
          <LuFilter
            size={20}
            className="text-purple-700 dark:text-purple-400"
          />
          Filtros de Búsqueda
        </span>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
          Utiliza los filtros para encontrar servicios específicos de manera
          rápida
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <CardsLoad
          data={data}
          render={(tipo) => {
            return (
              <CardInfo
                key={tipo.idTipoServicio}
                title={tipo.nombre}
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
                  span: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-300 dark:border-green-600 font-semibold",
                }}
                description={tipo.descripcion}
                span={tipo.estado ? "Activo" : "Inactivo"}
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
          }}
        />
      </div>
    </div>
  );
}
