"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Table from "@/components/ui/table/Table";
import { recursoData } from "@/data/recurso";
import Badge from "@/components/ui/badge/Badge";

import { LuBuilding2 } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuCircleCheckBig} from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { PiMoneyWavyLight } from "react-icons/pi";


export default function RecursoPage(){
    return(
        <div className="w-full h-full p-8 flex flex-col bg-gray-50">
            <header className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <span className="bg-red-600 p-3 rounded-xl">
                <LuPackage size={40} className="text-white" />
                </span>
                <div className="flex flex-col">
                <p className="font-bold text-3xl">Gestión de Recursos</p>
                <p className="text-sm mt-1">
                    Administra el inventario de recursos, equipos y materiales
                </p>
                </div>
            </div>
            <Button className="flex items-center gap-x-3 py-3 font-semibold mt-4 bg-red-600 text-white shadow-lg hover:bg-red-500">
                <FiPlus size={15} />
                Nuevo Recurso
            </Button>
            </header>
            <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
                <Card
                    title="Total"
                    icon={<LuPackage size={28} className="text-white" />}
                    description="20"
                    className = {{ container: "bg-emerald-100 shadow-lg", icon: "bg-emerald-600 rounded-full p-3", text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" }}}
                />
                <Card
                    title="Disponibles"
                    icon={<LuCircleCheckBig size={28} className="text-white" />}
                    description="11"
                    className = {{ container: "bg-blue-100 shadow-lg",  icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" }}}
                />
                <Card
                    title="En Uso"
                    icon={<LuClock4 size={28} className="text-white" />}
                    description="7"
                    className = {{ container: "bg-purple-100 shadow-lg", icon: "bg-purple-600 rounded-full p-3", text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" }}}
                />
                <Card
                    title="En Mantenimiento"
                    icon={<LuWrench size={28} className="text-white" />}
                    description="2"
                    className = {{ container: "bg-orange-100 shadow-lg", icon: "bg-orange-600 rounded-full p-3",text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" }}}
                />
            </div >
                <div className="py-4 flex w-full flex-col gap-y-4">
                    <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                        <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                        <LuFilter size={20} className="text-red-500"/>
                        Filtros de Búsqueda
                        </span>
                        <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar recursos específicos de manera rápida</p>
                    </section>
                </div>
                <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <p className="font-medium text-black text-xl">Recursos Registrados</p>
                            <p className="text-sm text-gray-500 mt-1">Gestiona todos los recursos registrados en el sistema </p>
                        </div>
                        <div>
                            <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1"> Total: 5 </span>
                        </div>
                    </div>
                    {<Table className="mt-4 bg-white w-full rounded-md " data={recursoData} columns={[
                        {
                            header: "Profesión",
                            cell: (props) => {
                                return (
                                <div className="flex items-start gap-x-3">
                                    <span className="bg-red-100 p-2 rounded-xl">
                                        <LuPackage size={15} className="text-red-600" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-sm">{props.row.nombre}</p>
                                        <p className="text-xs text-gray-600">ID: REC-00{props.row.idRecurso}</p>
                                    </div>
                                </div>);
                            },
                        },
                        {
                            header: "Categoria",
                            cell: (props) => {
                                return(
                                <div className="flex items-start gap-x-3">
                                    <LuClipboardList size={15} className="text-blue-600" />
                                    <p className="font-semibold text-sm">{props.row.tipo}</p>
                                </div>
                                )
                            }
                        },
                        {
                            header: "Disponibilidad",
                            cell: (props) => {
                                return(
                                <div className="flex flex-col gap-y-2">
                                    <Badge className="bg-yellow-100 text-yellow-800 border-orange-200 font-semibold">En uso</Badge>
                                    <p className="text-xs text-gray-500">
                                        Vendido 10 veces
                                    </p>
                                </div>
                                )
                            }                   
                        },
                        {
                            header: "Proveedor",
                            cell: (props) => {
                                return(
                                <div className="flex flex-col gap-y-2">
                                    <span className="flex items-center gap-x-2">
                                        <LuBuilding2 size={15} className="text-purple-600"/>
                                        <p className="font-semibold text-sm">{props.row.proveedor}</p>
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Responsable: {props.row.proveedorResponsable}
                                    </span>
                                </div>
    
                                )
                            }  
                        },
                        {
                            header: "Precio",
                            cell: (props) => {
                                return(
                                    <span className="flex w-auto items-center gap-x-2">
                                        <PiMoneyWavyLight size={15} className="text-green-600"/>
                                        <p className="font-semibold text-green-600 text-sm">S/. {props.row.precio}</p>
                                    </span>
                                )
                            }                   
                        },
                        {
                            header: "Estado",
                            cell: (props) => {
                                return(
                                    <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold">Activo</Badge>
                                )
                            }                      
                        },
                        {
                            header: "Acciones"
                        }
                    ]
                    }>
                    </Table>}               
            </div>
        </div>
    )
}   