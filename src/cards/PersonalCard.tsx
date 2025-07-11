"use client";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { Personal } from "@/interfaces/responsefinal.interface";
import { LuBriefcase, LuCalendar, LuPhone } from "react-icons/lu";
import { MdMoneyOff, MdNumbers, MdOutlineEmail } from "react-icons/md";

export const PersonalCard = (empleado: Personal) => {
  return (
    <CardInfo
      key={empleado?.idPersonal}
      title={`${empleado?.nombre} ${empleado?.apellido_paterno} ${empleado?.apellido_materno}`}
      icon={<p>{empleado?.nombre.split("")[0]}</p>}
      className={{
        container:
          "bg-white dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-200 ",
        header: {
          icon: "bg-blue-100 text-center p-0 size-7 flex items-center justify-center uppercase dark:bg-blue-500/30",
          description: "dark:text-gray-400",
        },
        span: "bg-green-100 text-green-600 font-bold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
      }}
      description={empleado?.cargo.cargo}
      span={empleado?.estado ? "Activo" : "Inactivo"}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col border-b border-gray-200 pb-2 gap-y-2 dark:border-gray-600">
          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <MdNumbers /> Numero de documento:{" "}
            <p className="font-semibold text-black dark:text-gray-500">
              {empleado?.numeroDocumento}
            </p>
          </span>
          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <MdOutlineEmail /> Correo:{" "}
            <p className="font-semibold text-black dark:text-gray-500">
              {empleado?.usuario.correo || "No disponible"}
            </p>
          </span>
          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <LuPhone /> Telefono:{" "}
            <p className="font-semibold text-black dark:text-gray-500">
              {empleado?.telefono}
            </p>
          </span>
          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <MdMoneyOff /> Sueldo:{" "}
            <p className="font-semibold text-green-600">{empleado?.sueldo}</p>
          </span>
          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <LuCalendar /> Ingreso:{" "}
            <p className="font-semibold text-black dark:text-gray-500">
              {empleado?.fechaIngreso.split("T")[0]}
            </p>
          </span>

          <span className="flex items-center text-xs gap-x-1 text-gray-500 dark:text-gray-300">
            <LuBriefcase /> Profesion:{" "}
            <p className="font-semibold text-black dark:text-gray-500">
              {empleado?.profesion.titulo || "No disponible"}
            </p>
          </span>
        </div>
      </div>
    </CardInfo>
  );
};
