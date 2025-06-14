import { Categoria } from "@/interfaces/response.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { LuSettings } from "react-icons/lu";
import Button from "@/components/ui/button/Button";




interface ListarCategoriaProps {
    data: Categoria[];
}

export default function ListarCategoria({ data }: ListarCategoriaProps) {
    return(
        <div className="grid grid-cols-3 gap-4 mt-4">
            {data.map((categoria) => {
                return(
                    <CardInfo
                    key= {categoria.idCategoria}
                    title={categoria.nombre}
                    description={categoria.descripcion}
                    icon={<LuSettings size={20} className="text-purple-600" />}
                    className={{
                        container: "bg-white",
                        header: {
                            title: "text-xl font-semibold",
                            description: "text-sm text-gray-900",
                        },
                    }}
                    
                    >
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="text-xs text-gray-600"> Servicios Activos</p>
                            <p className="text-green-600 font-bold">
                                {categoria.serviciosActivos}
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-xs text-gray-600">Ingresos del mes</p>
                            <p className="text-blue-600 font-bold"> S/. {categoria.ingresosMes}</p>
                        </div>
                    </div> 
                    <div className="flex items-start mt-2">
                        <Button className="bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 py-1 px-3">
                            Activo
                        </Button>
                    </div>
                    </CardInfo>
                )
            })}
        </div>
    )
}