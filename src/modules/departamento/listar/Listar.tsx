import { Departamento } from "@/interfaces/responsefinal.interface";
import React from "react";
import { LuFilter, LuUsers } from "react-icons/lu";
import CardsLoad from "@/components/share/cards-load/CardsLoad";
import { DepartamentoCard } from "@/cards/DepartamentoCard";

interface ListarDepartamentosProps {
  data: Departamento[];
}

export default function ListarDepartamentos({
  data,
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
        <CardsLoad data={data} render={DepartamentoCard} />
      </div>
    </div>
  );
}
