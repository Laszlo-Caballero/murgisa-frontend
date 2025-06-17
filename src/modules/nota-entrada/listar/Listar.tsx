"use client";
import { LuFilter } from "react-icons/lu";

import Badge from "@/components/ui/badge/Badge";
import Table from "@/components/ui/table/Table";
import { NotaEntrada } from "@/interfaces/response.interface";
import { LuCar } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { PiMoneyWavy } from "react-icons/pi";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

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
            <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="font-medium text-black text-xl">Notas Registradas</p>
                        <p className="text-sm text-gray-500 mt-1">Gestiona todas los notas registradas en el sistema </p>
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
                                        <LuPackage className="text-gray-600"/>
                                        <Badge className="bg-ywllow-100 text-blue-700 font-semibold border-pin">
                                            {props.row.item}
                                        </Badge> 
                                    </div>
                                )
                            }
                        },
                        {
                            header: "Cantidad",
                            cell: (props) => {
                                return(
                                    <span className="flex items-center gap-x-3" >
                                        <LuPackage className="text-purple-600"/>
                                        <p className="text-gray-500 ">Producto: {props.row.cantidad}</p>
                                    </span>
                                )
                            }
                        },
                        {
                            header: "Monto",
                            cell: (props) => {
                                return(
                                    <span className="flex items-center gap-x-3">
                                        <PiMoneyWavy className="text-green-600"/>
                                        <p className="text-green-600 font-semibold">S/. {props.row.monto}</p>
                                    </span>
                                )
                            }
                        },
                        {
                            header:"Estado",
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
                            cell: (props) => {
                            return (
                                <span className="flex items-center gap-x-4">
                                    <LuSquarePen className="text-red-500" />
                                    <LuTrash2 className="text-gray-900"/>
                                </span>
                                );
                            },
                        }
                    ]}
                    >
                </Table>}


            </div>

        </div>
    )
}