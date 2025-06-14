import CardInfo from "@/components/ui/card-info/CardInfo";
import { Departamento } from "@/interfaces/response.interface";
import React from "react";
import { LuFilter, LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiWrenchBold } from "react-icons/pi";
interface ListarDepartamentosProps {
  data: Departamento[];
}

export default function ListarDepartamentos({
  data,
}: ListarDepartamentosProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      <section className="flex w-full flex-col p-4 rounded-lg shadow">
        <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
          <LuFilter />
          Filtros
        </span>
      </section>
      <div className="grid grid-cols-3 gap-4">
        {data.map((forma) => {
          return (
            <CardInfo
              key={forma.idDepartamento}
              title={forma.titulo}
              icon={<PiWrenchBold size={20} className="text-purple-400" />}
              className={{
                header: {
                  icon: "bg-purple-100",
                },
                span: "bg-purple-100 text-purple-700 font-bold",
              }}
              description={forma.descripcion}
              span={forma.estado ? "Activo" : "Inactivo"}
            >
              <div className="flex flex-col gap-y-2">
                <span className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Empleados</p>
                  <p className="text-sm font-semibold flex items-center gap-x-1">
                    <LuUsers /> {forma.empleados}
                  </p>
                </span>
                <span className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Comisión</p>
                  <p className="text-sm font-semibold flex items-center text-green-600">
                    <MdOutlineAttachMoney />
                    {forma.presupuesto}
                  </p>
                </span>
              </div>
            </CardInfo>
          );
        })}
      </div>
    </div>
  );
}
