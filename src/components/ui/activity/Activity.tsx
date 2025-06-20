import { ActividadesRecientes } from "@/interfaces/response.interface";
import { ReactNode } from "react";
import { LiaSitemapSolid } from "react-icons/lia";
import { LuBriefcase, LuShoppingCart, LuUsers } from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
export default function Activity({
  tipo,
  descripcion,
  fecha,
  titulo,
}: ActividadesRecientes) {
  const icon: Record<string, ReactNode> = {
    venta: <LuShoppingCart size={20} className="text-green-600" />,
    administracion: <LuUsers size={20} className="text-purple-600" />,
    mantenimiento: <PiWrenchBold size={20} className="text-blue-600" />,
    servicio: <LuBriefcase size={20} className="text-yellow-600" />,
    recursos: <LiaSitemapSolid size={20} className="text-orange-600" />,
  };

  return (
    <div className="flex p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
      <span className="p-2 rounded-full bg-white max-h-max dark:bg-gray-800">
        {icon[tipo]}
      </span>
      <div className="w-full flex flex-col gap-y-1 ml-3">
        <p className="font-medium text-sm dark:text-white">{titulo}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {descripcion}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-200 mt-1">
          {formatDistanceToNow(new Date(fecha), { locale: es })}
        </p>
      </div>
    </div>
  );
}
