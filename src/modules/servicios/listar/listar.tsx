import { Servicio } from "@/interfaces/response.interface";
import { LuFilter } from "react-icons/lu";


interface ListarServiciosProps {
    data: Servicio[];
}

export default function ListarServicios({ data }: ListarServiciosProps) {
    return (
        <div className="py-4 flex w-full flex-col gap-y-4">
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                    <LuFilter size={20} className="text-blue-700"/>
                    Filtros de Búsqueda
                </span>
                <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar profesiones específicas de manera rápida</p>
                </section>
            </div>
        </div>
    );
}