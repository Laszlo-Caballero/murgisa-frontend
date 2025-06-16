import { Proveedor } from "@/interfaces/response.interface";
import Table from "@/components/ui/table/Table";

import { LuFilter } from "react-icons/lu";

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
                                <div>
                                    
                                </div>
                            )
                        }
                    }
                ]}>
                </Table>}
            </div>
        </div>
    )
}