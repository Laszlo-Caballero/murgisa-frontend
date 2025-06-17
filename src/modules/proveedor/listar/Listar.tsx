import { Proveedor } from "@/interfaces/response.interface";
import Table from "@/components/ui/table/Table";
import Badge from "@/components/ui/badge/Badge";

import { LuUser } from "react-icons/lu";
import { LuBuilding, LuFilter } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

interface ListarProveedorProps{
    data: Proveedor[]
}

export default function ListarProveedor({data}: ListarProveedorProps){
    return(
        <div className="py-4 flex w-full flex-col gap-y-4">
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                    <LuFilter size={20} className="text-red-700"/>
                    Filtros de Búsqueda
                </span>
                <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar proveedores específicos de manera rápida</p>
                </section>
            </div>
            <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <p className="font-medium text-black text-xl">Proveedores Registrados</p>
                        <p className="text-sm text-gray-500 mt-1">Gestiona todos los proveedores registrados en el sistema </p>
                    </div>
                    <div>
                        <span className="bg-gray-50 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1"> Total: 5 </span>
                    </div>
                </div>
                {<Table 
                className="mt-4 bg-white w-full rounded-md "
                data={data}
                columns={[
                    {
                        header: "Profesion",
                        cell: (props) => {
                            return(
                                <div className="flex items-start gap-x-3">
                                    <span className="bg-red-100 p-2 rounded-lg">
                                        <LuBuilding size={15} className="text-red-600"/>
                                    </span>
                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-semibold">{props.row.razSocial}</p>
                                        <p className="text-sm text-gray-500">RUC: {props.row.ruc}</p>
                                        <p className="text-sm text-gray-500">ID: PROV-00{props.row.idProveedor}</p>
                                    </div>
                                </div>
                            )
                        }
                    },{
                        header: "Responsable",
                        cell: (props) => {
                            return(
                                <div className="flex flex-col gap-y-1">
                                    <span className="flex items-center gap-x-2">
                                        <LuUser size={15} className="text-black"/>
                                        <p className="font-semibold">{props.row.responsable}</p>
                                    </span>
                                    <p className="text-sm text-gray-600"> DNI: {props.row.dni}</p>
                                    <span className="flex items-center gap-x-2">
                                        <LuMail size={15} className="text-yellow-600" />
                                        <p className="text-sm text-gray-600">{props.row.email}</p>
                                    </span>
                                </div>
                            )
                        }
                    },
                    {
                        header: "Tipo Recurso",
                        cell: (props) => {
                            return(
                                <Badge className="bg-purple-100 text-purple-800 rounded-purple-300 font-semibold">
                                    {props.row.tipoRecurso}
                                </Badge>
                            )
                        }
                    },
                    {
                        header: "Última Compra",
                        cell: (props) => {
                            return(
                                <div className="flex flex-col gap-y-1">
                                    <span className="flex items-center gap-x-2">
                                        <LuCalendar size={15} className="text-blue-500" />
                                        <p className="text-sm font-semibold"> {new Date(props.row.ultimaCompra).toLocaleDateString('es-ES')}</p>
                                    </span>

                                </div>
                            )
                        }
                    },
                    {
                        header: "Estado",
                        cell: (props) => {
                            return(
                                <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold"> Activo</Badge>
                            )
                        }
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
                ]}>
                </Table>}
            </div>
        </div>
    )
}