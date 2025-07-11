import { ReactNode } from "react";
import { LiaSitemapSolid } from "react-icons/lia";
import { LuBriefcase, LuShoppingCart, LuUsers } from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Log } from "@/interfaces/responsefinal.interface";
export default function Activity({ tipo, fecha, mensaje }: Log) {
  const icon: Record<string, ReactNode> = {
    Venta: <LuShoppingCart size={20} className="text-green-600" />,
    Administracion: <LuUsers size={20} className="text-purple-600" />,
    Mantenimiento: <PiWrenchBold size={20} className="text-blue-600" />,
    Servicio: <LuBriefcase size={20} className="text-yellow-600" />,
    Recursos: <LiaSitemapSolid size={20} className="text-orange-600" />,
    Cliente: <LuUsers size={20} className="text-red-600" />,
  };

  return (
    <div className="flex p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
      <span className="p-2 rounded-full bg-white max-h-max dark:bg-gray-800">
        {icon[tipo]}
      </span>
      <div className="w-full flex flex-col gap-y-1 ml-3">
        <p className="font-medium text-sm dark:text-white">{tipo}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{mensaje}</p>
        <p className="text-xs text-gray-500 dark:text-gray-200 mt-1">
          {formatDistanceToNow(new Date(fecha), { locale: es })}
        </p>
      </div>
    </div>
  );
}
