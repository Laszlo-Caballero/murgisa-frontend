import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { env } from "@/config/env";
import { Personal } from "@/interfaces/response.interface";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import {
  LuBriefcase,
  LuCircleCheckBig,
  LuFilter,
  LuUsers,
} from "react-icons/lu";
import { MdNumbers } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdMoneyOff } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
export default async function PersonalPage() {
  const response = await axios.get(`${env.url_api}/personal`);
  if (!response.data) {
    return (
      <div className="w-full p-8 flex flex-col">
        <p className="text-red-500">No se encontraron datos de personal.</p>
      </div>
    );
  }

  const empleados: Personal[] = response.data;

  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-100 p-3 rounded-full">
            <LuUsers size={24} className="text-blue-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Personal</p>
            <p className="text-sm">
              Administra la información de los empleados de MURGISA
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold px-6 bg-blue-600">
          <FiPlus size={15} />
          Nuevo Empleado
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Empleados"
          icon={<LuUsers size={35} className="text-blue-600" />}
          description="3"
        />
        <Card
          title="Empleados Activos"
          icon={<LuCircleCheckBig size={35} className="text-green-600" />}
          description="3"
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-lg shadow">
          <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
            <LuFilter />
            Filtros
          </span>
        </section>
        <div className="grid grid-cols-3 gap-4">
          {empleados.map((empleado) => {
            return (
              <CardInfo
                key={empleado.idPersonal}
                title={`${empleado.nombre} ${empleado.apellido_paterno} ${empleado.apellido_materno}`}
                icon={<p>{empleado.nombre.split("")[0]}</p>}
                className={{
                  header: {
                    icon: "bg-blue-100 text-center p-0 size-7 flex items-center justify-center uppercase",
                  },
                  span: "bg-purple-100 text-blue-700 font-bold",
                }}
                description={empleado.cargo.cargo}
                span={empleado.estado ? "Activo" : "Inactivo"}
              >
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col border-b border-gray-200 pb-2 gap-y-2">
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdNumbers /> Numero de documento:{" "}
                      <p className="font-semibold text-black">
                        {empleado.numeroDocumento}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdOutlineEmail /> Correo:{" "}
                      <p className="font-semibold text-black">
                        {empleado?.usuario?.correo || "No disponible"}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuPhone /> Telefono:{" "}
                      <p className="font-semibold text-black">
                        {empleado.telefono}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <MdMoneyOff /> Sueldo:{" "}
                      <p className="font-semibold text-green-600">
                        {empleado.sueldo}
                      </p>
                    </span>
                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuCalendar /> Ingreso:{" "}
                      <p className="font-semibold text-black">
                        {empleado.fechaIngreso.split("T")[0]}
                      </p>
                    </span>

                    <span className="flex items-center text-xs gap-x-1 text-gray-500">
                      <LuBriefcase /> Profesion:{" "}
                      <p className="font-semibold text-black">
                        {empleado.profesion.titulo || "No disponible"}
                      </p>
                    </span>
                  </div>
                </div>
              </CardInfo>
            );
          })}
        </div>
      </div>
    </div>
  );
}
