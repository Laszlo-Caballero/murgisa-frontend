"use client";

import CardInfo from "@/components/ui/card-info/CardInfo";
import { Departamento } from "@/interfaces/responsefinal.interface";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiWrenchBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";

import { LuSquarePen, LuTrash2 } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import ActualizarCliente from "@/modules/clientes/actualizar/Actualizar";
import ActualizarDepartamento from "@/modules/departamento/actualizar/ActualizarDepartamento";

export const DepartamentoCard = (departamento: Departamento) => {
  return (
    <CardInfo
      key={departamento?.idDepartamento}
      title={departamento?.titulo}
      icon={<PiWrenchBold size={20} className="text-blue-400" />}
      className={{
        container: "bg-white dark:bg-gray-800 dark:text-white",
        header: { icon: "bg-blue-100 dark:bg-blue-500/10" },
        span: departamento?.estado
          ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
          : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700",
      }}
      description={departamento?.descripcion}
      span={departamento?.estado ? "Activo" : "Inactivo"}
    >
      <div className="flex flex-col gap-y-2">
        <span className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">Empleados</p>
          <p className="text-sm font-semibold flex items-center gap-x-1 dark:text-white">
            <LuUsers /> 1
          </p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Presupuesto
          </p>
          <p className="text-sm font-semibold flex items-center text-green-600 dark:text-green-400">
            <MdOutlineAttachMoney />
            {departamento?.presupuesto}
          </p>
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <ButtonModal
          modal={<ActualizarDepartamento id={departamento?.idDepartamento} />}
          className="p-0 bg-transparent"
        >
          <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-600/20">
            <LuSquarePen size={15} />
            Editar
          </Button>
        </ButtonModal>
        <div className="flex items-center gap-x-3 py-1 px-3 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm text-sm">
          <DeleteModal
            id={departamento?.idDepartamento}
            endpoint="departamento"
          >
            <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
          </DeleteModal>
          Desactivar
        </div>
      </div>
    </CardInfo>
  );
};
