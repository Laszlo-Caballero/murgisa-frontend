import { LuShield } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

import Card from "@/components/ui/card/Card";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { PlanificacionPreventivo } from "@/interfaces/response.interface"

interface ListarPreventivosProps {
    data: PlanificacionPreventivo[];
}

export default function ListarCalendario({ data }: ListarPreventivosProps) {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {data.map((preventivo) => {
                return(
                    <div className="bg-white rounded-lg border border-gray-300 hover:shadow-md" key={preventivo.idPlanificacion}>
                        <div className="flex items-center justify-between mt-4 mx-6">
                            <span className="text-xs font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full py-1 px-3">
                                Completado
                            </span>
                            <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 border border-yellow-200 rounded-full py-1 px-3">
                                En Progreso
                            </span>
                        </div>
                        <CardInfo 
                        title={preventivo.recurso}
                        icon={<LuShield size={20} className="text-orange-500" />}
                        description=""
                        className={{container:"gap-y-1 pointer-events-none pt-4", 
                            header:{
                                icon: "bg-orange-100 rounded-lg p-2",
                            }
                        }}>
                        <div className="flex flex-col gap-y-2 px-2">
                            <span className="flex items-center gap-x-2">
                                <LuCalendar size={16} className="text-purple-500" />
                                <p className="text-sm text-gray-700">{new Date(preventivo.fecha).toLocaleDateString('es-ES')}</p>
                            </span>
                            <span className="flex items-center gap-x-2">
                                <LuUsers size={16} className="text-blue-500" />
                                <p className="text-sm text-gray-700" >{preventivo.responsable}</p>
                            </span>
                            <span className="flex items-center gap-x-2">
                                <LuClock4 size={16} className="text-red-500" />
                                <p className="text-sm text-gray-700">{preventivo.horario}</p>
                            </span>
                        </div>
                        </CardInfo>
                    </div>

                )
            })}
        </div>
    )

}


