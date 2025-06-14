import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { AiOutlineCustomerService } from "react-icons/ai";
import { env } from "@/config/env";
import { ResponseCargo } from "@/interfaces/response.interface";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import {
  LuCircleCheckBig,
  LuFilter,
  LuUserCheck,
  LuUsers,
} from "react-icons/lu";

export default async function Cargo() {
  const responseCargo = await axios.get(`${env.url_api}/cargo`);

  const cargos: ResponseCargo = responseCargo.data;

  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-purple-100 p-3 rounded-full">
            <LuUserCheck size={24} className="text-purple-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Cargos</p>
            <p className="text-sm">
              Administra los puestos de trabajo y roles organizacionales
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold px-6 bg-purple-600">
          <FiPlus size={15} />
          Nuevo Cargo
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Cargos"
          icon={<LuUserCheck size={35} className="text-purple-600" />}
          description={cargos.total.toString()}
        />
        <Card
          title="Cargos Activos"
          icon={<LuCircleCheckBig size={35} className="text-green-600" />}
          description={cargos.activos.toString()}
        />
        <Card
          title="Total Empleados Asignados"
          icon={<LuUsers size={35} className="text-blue-600" />}
          description={cargos.usuarios.toString()}
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
          {cargos.cargos.map((cargo) => (
            <CardInfo
              key={cargo.idCargo}
              title={cargo.cargo}
              icon={
                <AiOutlineCustomerService
                  size={20}
                  className="text-purple-400"
                />
              }
              className={{
                header: {
                  icon: "bg-purple-100",
                },
                span: "bg-purple-100 text-purple-700 font-bold",
              }}
              description={cargo.descripcion}
              span={cargo.estado ? "Activo" : "Inactivo"}
            >
              <div className="flex flex-col gap-y-2">
                <span className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Empleados</p>
                  <p className="text-sm font-semibold flex items-center gap-x-1">
                    <LuUsers /> {cargo.totalUsuario}
                  </p>
                </span>
              </div>
            </CardInfo>
          ))}
        </div>
      </div>
    </div>
  );
}
