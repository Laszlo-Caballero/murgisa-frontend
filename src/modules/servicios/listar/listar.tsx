"use client";
import {
  LuFilter
} from "react-icons/lu";
import { Servicio } from "@/interfaces/responsefinal.interface";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { ServicioCards } from "@/cards/ServicioCard";

interface ListarServiciosProps {
  data: Servicio[];
}

export default function ListarServicios({ data }: ListarServiciosProps) {
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardsLoad data={data || []} render={ServicioCards} />
      </div> 

    </div>
  );
}
