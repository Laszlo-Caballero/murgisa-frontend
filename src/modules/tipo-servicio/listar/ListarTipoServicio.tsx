"use client";

import TipoServicioPage from "@/app/(dashboard)/tipo-servicio/page";
import { TipoServicioCards } from "@/cards/TipoServicioCard";
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
          render={TipoServicioCards}
        />
      </div>
    </div>
  );
}
