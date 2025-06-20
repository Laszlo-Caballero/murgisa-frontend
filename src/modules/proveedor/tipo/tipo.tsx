import { TipoRecurso } from "@/interfaces/response.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { LuUser, LuLayers, LuShoppingCart } from "react-icons/lu";

interface ListarTipoRecursoProps {
  data: TipoRecurso[];
}

export default function ListarTipoRecurso({ data }: ListarTipoRecursoProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((tipo) => {
        return (
          <CardInfo
            key={tipo.idTipoRecurso}
            title={tipo.nombre}
            description={tipo.descripcion}
            icon={
              <LuLayers size={20} className="text-orange-600 dark:text-orange-400" />
            }
            className={{
              container:
                "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
              header: {
                title: "text-xl font-semibold text-gray-900 dark:text-white",
                description: "text-sm text-gray-900 dark:text-gray-300",
                icon: "bg-orange-100 dark:bg-orange-500/10 rounded-lg",
              },
            }}
          >
            <div className="flex flex-col gap-y-2">
              <span className="flex items-center gap-x-2">
                <LuUser size={20} className="text-blue-600 dark:text-blue-400" />
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Total: {tipo.proveedorTotal} Proveedores
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <LuShoppingCart
                  size={20}
                  className="text-green-600 dark:text-green-400"
                />
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Compras: {tipo.total} Realizadas
                </p>
              </span>
            </div>
          </CardInfo>
        );
      })}
    </div>
  );
}