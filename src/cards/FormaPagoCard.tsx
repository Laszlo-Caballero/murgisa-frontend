"use client";

import CardInfo from "@/components/ui/card-info/CardInfo";
import { FormaPago } from "@/interfaces/response.interface";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";

export const FormaPagoCard = (forma: FormaPago) => {
  return (
    <CardInfo
      key={forma.idFormaPago}
      title={forma.tipo}
      icon={<FaRegMoneyBillAlt size={20} className="text-green-400" />}
      className={{
        container:
          "bg-white dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-300",
        header: {
          icon: "bg-green-100 dark:bg-green-500/30",
          description: "dark:text-gray-400",
        },
        span: forma?.estado
          ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
          : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700",
      }}
      description={forma?.descripcion}
      span={forma?.estado ? "Activo" : "Inactivo"}
    >
      <div className="flex items-center gap-x-24">
        <span className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
            Comisión
          </p>
          <p className="text-sm font-semibold flex items-center ">
            <MdOutlineAttachMoney className="text-green-600 dark:text-green-400" />{" "}
            {forma?.comision}%
          </p>
        </span>
        <span className="flex flex-col gap-y-1">
          <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
            Fecha de Registro
          </p>
          <p className="text-sm font-semibold flex items-center gap-x-1">
            <LuCalendar className="text-blue-600 dark:text-blue-400" />{" "}
            {forma?.registeredAt?.split("T")[0]}
          </p>
        </span>
      </div>
    </CardInfo>
  );
};
