import { Categoria } from "@/interfaces/response.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { LuSettings } from "react-icons/lu";
import Button from "@/components/ui/button/Button";

interface ListarCategoriaProps {
  data: Categoria[];
}

export default function ListarCategoria({ data }: ListarCategoriaProps) {
  return (
    <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((categoria) => {
        return (
          <CardInfo
            key={categoria.idCategoria}
            title={categoria.nombre}
            description={categoria.descripcion}
            icon={<LuSettings size={20} className="text-purple-600 dark:text-purple-400" />}
            span={categoria.estado ? "Activo" : "Inactivo"}
            className={{
              container: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
              header: {
                title: "text-xl font-semibold text-gray-900 dark:text-white",
                description: "text-sm text-gray-900 dark:text-gray-300",
                icon: "bg-purple-100 dark:bg-purple-500/10 rounded-md p-3",
              },
              span: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-300 dark:border-green-600 font-semibold",
            }}
          >
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-300">Servicios Activos</p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  {categoria.serviciosActivos}
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-300">Ingresos del mes</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold">
                  S/. {categoria.ingresosMes}
                </p>
              </div>
            </div>
          </CardInfo>
        );
      })}
    </div>
  );
}