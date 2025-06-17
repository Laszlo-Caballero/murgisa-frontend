"use client";
import { Condicion } from "@/interfaces/response.interface";
import { LuFilter } from "react-icons/lu";
import { LuBriefcase } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Button from "@/components/ui/button/Button";

interface ListarcondicionProps {
    data: Condicion[];
}

export default function ListarCondicion({ data }: ListarcondicionProps) {
    return (
        <div className="py-4 flex w-full flex-col gap-y-4">
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                    <LuFilter size={20} className="text-blue-700"/>
                    Filtros de Búsqueda
                </span>
                <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar condicion de manera rápida</p>
                </section>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {data.map((condicion) => {
                    return (
                        <CardInfo 
                            key={condicion.idCondicion}
                            title={condicion.nombre}
                            icon={<LuBriefcase size={20} className="text-purple-600" />}
                            className={{
                                container: "bg-white",
                                header: {
                                    title: "text-md",
                                    description: "text-sm text-gray-600",
                                    icon: "bg-purple-100 rounded-lg",
                                },
                                span: "bg-green-100 text-green-700 border border-green-300 font-semibold ",
                            }}  
                            description={condicion.descripcion}
                            span={condicion.estado ? "Activo" : "Inactivo"}
                        >
                        <div className="flex items-center justify-between gap-x-2 mt-4">
                            <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-red-500 border border-red-300 hover:bg-red-50">
                                <LuSquarePen size={15} />
                                Editar
                            </Button>
                            <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-black border border-gray-300 hover:bg-gray-100">
                                <LuEye size={15} />
                                Desactivar
                            </Button>
                        </div>
                    </CardInfo>
                    );
                })}
            </div>
        </div>
    );
}