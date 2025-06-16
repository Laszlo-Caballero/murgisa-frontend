import { TipoRecurso } from "@/interfaces/response.interface"
import CardInfo from "@/components/ui/card-info/CardInfo";
import { LuUser } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

interface ListarTipoRecursoProps{
    data: TipoRecurso[],
}

export default function ListarTipoRecurso({ data }: ListarTipoRecursoProps){
    return(
        <div className="grid grid-cols-3 gap-4 mt-4">
            {data.map((tipo) => {
                return(
                    <CardInfo
                    key={tipo.idTipoRecurso}
                    title={tipo.nombre}
                    description={tipo.descripcion}
                    icon = {<LuLayers size={20} className="text-orange-600"/>}
                    className={{
                        container: "bg-white",
                        header: {
                            title: "text-xl font-semibold",
                            description: "text-sm text-gray-900",
                            icon: "bg-orange-100 rounded-lg"
                        },
                    }}
                    >
                    <div className="flex flex-col gap-y-2">
                        <span className="flex items-center gap-x-2">
                            <LuUser size={20} className="text-blue-600"/>
                            <p className="text-sm text-gray-500"> Total: {tipo.proveedorTotal} Proveedores</p>
                        </span>
                        <span className="flex items-center gap-x-2">
                            <LuShoppingCart size={20} className="text-green-600"/>
                            <p className="text-sm text-gray-500"> Compras: {tipo.total} Realizadas</p>
                        </span>
                    </div>
                    </CardInfo>
                )
            })}

        </div>
    )
}