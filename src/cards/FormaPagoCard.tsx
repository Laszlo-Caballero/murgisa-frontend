"use client";

import CardInfo from "@/components/ui/card-info/CardInfo";
import { FormaPago } from "@/interfaces/response.interface";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

import { LuSquarePen, LuTrash2 } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import ActualizarFormaPago from "@/modules/forma-pago/actualizar/Actualizar";

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
      <div className="flex items-center justify-between gap-x-2 mt-4">
        <ButtonModal
          modal={<ActualizarFormaPago id={forma?.idFormaPago} />}
          className="p-0 bg-transparent"
        >
          <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-600/20">
            <LuSquarePen size={15} />
            Editar
          </Button>
        </ButtonModal>
        <div className="flex items-center gap-x-3 py-1 px-3 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm text-sm">
          <DeleteModal id={forma?.idFormaPago} endpoint="forma-pago">
            <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
          </DeleteModal>
          Desactivar
        </div>
      </div>
    </CardInfo>
  );
};
