import { LuShield, LuUsers, LuCalendar, LuClock4 } from "react-icons/lu";

import Badge from "@/components/ui/badge/Badge";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { PlanificacionPreventivo } from "@/interfaces/response.interface";

interface ListarPreventivosProps {
  data: PlanificacionPreventivo[];
}

export default function ListarCalendario({ data }: ListarPreventivosProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((preventivo) => (
        <div
          key={preventivo.idPlanificacion}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-md"
        >
          <div className="flex items-center justify-between mt-4 mx-6">
            <Badge className="bg-green-100 dark:bg-green-500/20 dark:border-green-400/40 border-green-300 text-green-700 dark:text-green-300 font-semibold py-1">
              Activo
            </Badge>
            <Badge className="bg-yellow-100 dark:bg-yellow-500/20 dark:border-yellow-400/40 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-semibold py-1">
              En progreso
            </Badge>
          </div>

          <CardInfo
            title={preventivo.recurso}
            icon={<LuShield size={20} className="text-orange-500" />}
            description=""
            className={{
              container: "gap-y-1 pointer-events-none pt-4",
              header: {
                icon: "bg-orange-100 dark:bg-orange-500/20 rounded-lg p-2",
              },
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-2 px-2">
                <span className="flex items-center gap-x-2">
                  <LuCalendar size={16} className="text-red-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {new Date(preventivo.fecha).toLocaleDateString("es-ES")}
                  </p>
                </span>
                <span className="flex items-center gap-x-2">
                  <LuClock4 size={16} className="text-blue-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {preventivo.horario}
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-y-2 px-2">
                <span className="flex items-center gap-x-2">
                  <LuUsers size={16} className="text-green-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {preventivo.responsable}
                  </p>
                </span>
                <span className="flex items-center gap-x-2">
                  <LuShield size={16} className="text-purple-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {preventivo.tipo}
                  </p>
                </span>
              </div>
            </div>
          </CardInfo>
        </div>
      ))}
    </div>
  );
}
