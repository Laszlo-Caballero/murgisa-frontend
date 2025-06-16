"use client";
import { LuFilter } from "react-icons/lu";
import { PlanificacionPreventivo } from "@/interfaces/response.interface"
import { LuCalendar } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";


import Badge from "@/components/ui/badge/Badge";
import Table from "@/components/ui/table/Table";

interface ListarPreventivosProps {
    data: PlanificacionPreventivo[];
}

export default function ListarPreventivos({ data }: ListarPreventivosProps) {
    return(
        <div className="py-4 flex w-full flex-col gap-y-4">
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                    <LuFilter size={20} className="text-orange-600"/>
                    Filtros de Búsqueda
                </span>
                <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar mantenimientos programados de manera rápida</p>
                </section>
            </div>
            <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="font-medium text-black text-xl">Mantenimientos Registrados</p>
                        <p className="text-sm text-gray-500 mt-1">Gestiona todos los mantenimientos programados</p>
                    </div>
                    <div>
                        <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1"> Total: 5 </span>
                    </div>
                </div>

                { <Table 
                    className="mt-4 bg-white w-full rounded-md "
                    data={data} 
                    columns={[
                    {   
                        header: "Mantenimiento",
                        cell: (props) => {
                        return (
                            <div className="flex items-start gap-x-3">
                                <div className="flex flex-col">
                                <p className="font-semibold text-sm">{props.row.tipo}</p>
                                <p className="text-xs text-gray-600">ID: PLAN-00{props.row.idPlanificacion}</p>
                                </div>
                            </div>
                            );
                        },
                    },
                    {
                        header: "Fecha Programada",
                        cell: (props) => {
                        return (
                            <div className="flex flex-col gap-y-1">
                                <span className="flex items-center gap-x-2">
                                    <LuCalendar size={15} className="text-blue-500" />
                                    <p className="text-sm font-semibold"> {new Date(props.row.fecha).toLocaleDateString('es-ES')}</p>
                                </span>
                                <p className="text-sm text-gray-500">{props.row.horario}</p>
                            </div>
                            );
                        },
                    },
                    {
                        header: "Responsable",
                        cell: (props) => {
                            return(
                                <div className="flex flex-col gap-y-1">
                                    <span className="flex items-center gap-x-2">
                                        <LuUsers size={15} className="text-gray-500" />
                                        <span className="text-sm font-bold">{props.row.responsable}</span>
                                    </span>
                                    <span>
                                        <p className="text-xs text-gray-600"> {props.row.cantPersonal} técnicos</p>
                                    </span>

                                </div>
                            );
                        },
                    },
                    {
                        header: "Recurso",
                        cell: (props) => {
                            return(
                                <span className="text-sm">
                                    {props.row.recurso}
                                </span>
                            )
                        }
                    },
                    {
                        header: "Prioridad",
                        cell: (props) => {
                        return (
                            <Badge className="bg-yellow-100 border-yellow-300 text-yellow-700 font-semibold">
                                Media
                            </Badge>
                            );
                        },
                    },
                    {
                        header: "Estado",
                        cell: (props) => {
                        return (
                            <Badge className="bg-green-100 border-green-300 text-green-700 font-semibold">
                                Activo
                            </Badge>
                            );
                        },
                    },
                    {
                        header: "Acciones",
                    }
                ]}>
                </Table> }
            </div>
        </div>
    )
}