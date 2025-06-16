"use client";
import { LuFilter } from "react-icons/lu";

import Badge from "@/components/ui/badge/Badge";
import Table from "@/components/ui/table/Table";
import { NotaEntrada } from "@/interfaces/response.interface";
import { LuCar } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";

interface ListarNotaEntradaProps{
    data: NotaEntrada[]
}

export default function ListarNotaEntrada({ data }: ListarNotaEntradaProps){
    return(
        <div className="py-4 flex w-full flex-col gap-y-4">
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
                    <LuFilter size={20} className="text-pink-600"/>
                    Filtros de Búsqueda
                </span>
                <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar notas de entrada programadas de manera rápida</p>
                </section>
            </div>
            { <Table
                className="mt-4 bg-white w-full rounded-md "
                data={data} 
                columns={[
                    {
                        header: "Nota Entrada",
                        cell: (props) => {
                            return(
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex items-center gap-x-2">
                                        <span className="bg-pink-200 p-2 rounded-lg">
                                            <LuCar className="text-pink-700"></LuCar>
                                        </span>
                                        <div>
                                            <p className="font-semibold">ID: NE-00{props.row.idNotaEntrada}</p>
                                            <p className="text-xs text-gray-500">Fecha: {props.row.fecha}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    },
                    {
                        header: "Proveedor",
                        cell: (props) => {
                            return(
                                <div className="flex items-center gap-x-4">
                                    <LuBuilding2 className="text-blue-600"/>
                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-semibold">{props.row.proveedor}</p>
                                        <p className="text-sm text-gray-500">Ruc: {props.row.ruc}</p>
                                    </div>
                                </div>
                            )
                        }
                    },
                    {
                        header: "Recurso",
                        cell: (props) => {
                            return(
                                <div className="flex items-center gap-x-4" >
                                    {/* <LuPackage/>
                                    <Badge className="bg-pink-100 text-pink-700 font-semibold border-pin">
                                        {props.row.item}
                                    </Badge> */}
                                </div>
                            )
                        }
                    }
                ]}
                >
            </Table>

            }
        </div>
    )
}