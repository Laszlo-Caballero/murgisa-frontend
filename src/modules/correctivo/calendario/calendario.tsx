import Badge from "@/components/ui/badge/Badge";
import CardInfo from "@/components/ui/card-info/CardInfo";

import { LuWrench } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { MantenimientoCorrectivo } from "@/interfaces/responsefinal.interface";

interface ListarCorrectivoProps {
  data: MantenimientoCorrectivo[];
}

export default function ListaCalendario({ data }: ListarCorrectivoProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((correctivo) => {
        return (
          <div
            className="bg-white rounded-lg border border-gray-300 hover:shadow-md  dark:bg-gray-800 dark:shadow-lg dark:border-none"
            key={correctivo.mantenimientoCorrectivoId}
          >
            <div className="flex items-center justify-between mt-4 mx-6 ">
              <Badge className="bg-green-100 dark:bg-green-500/20 dark:border-green-400/40 border-green-300 text-green-700 dark:text-green-300 font-semibold py-1">
                Activo
              </Badge>
              <Badge className="bg-yellow-100 dark:bg-yellow-500/20 dark:border-yellow-400/40 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-semibold py-1">
                En progreso
              </Badge>
            </div>

            <CardInfo
              title={correctivo.recurso.nombre}
              icon={<LuWrench size={20} className="text-orange-500 " />}
              description=""
              className={{
                container: "bg-white dark:bg-gray-800 dark:text-gray-300",
                header: {
                  icon: "bg-orange-100 rounded-lg p-2  dark:bg-orange-600/20",
                },
              }}
            >
              <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-y-2 px-2">
                  <span className="flex items-center gap-x-2 ">
                    <LuCalendar size={16} className="text-red-500" />
                    <p className="text-m text-gray-700 dark:text-gray-500">
                      {new Date(correctivo.fechaInicio).toLocaleDateString(
                        "es-ES"
                      )}
                    </p>
                  </span>
                  <span className="flex items-center gap-x-2">
                    <LuClock4 size={16} className="text-blue-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                      {correctivo?.tipo.map((tipo) => tipo.nombre).join(", ")}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 px-2">
                  <span className="flex items-center gap-x-2">
                    <LuUsers size={16} className="text-green-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                      {correctivo.personal.nombre}
                    </p>
                  </span>
                  <span className="flex items-center gap-x-2">
                    <LuWrench size={16} className="text-purple-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-500">
                      {correctivo?.tipo.map((tipo) => tipo.nombre).join(", ")}
                    </p>
                  </span>
                </div>
              </div>
            </CardInfo>
          </div>
        );
      })}
    </div>
  );
}
