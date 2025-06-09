import Button from "@/components/ui/button/Button";
import { LuUsers } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import { LuBuilding } from "react-icons/lu";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarClientes from "@/modules/clientes/Listar/Listar";
import axios from "axios";
import { env } from "@/config/env";
import { Cliente } from "@/interfaces/response.interface";

export default async function Clientes() {
  const responseData = await axios.get(`${env.url_api}/cliente`);
  if (!responseData.status) {
    return <div>Error al cargar los datos de los clientes.</div>;
  }
  const clientes: Cliente[] = responseData.data;

  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-100 p-3 rounded-full">
            <LuUsers size={24} className="text-blue-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Clientes</p>
            <p className="text-sm">
              Administra la información de tus clientes y sus ventas
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold">
          <FiPlus size={15} />
          Nuevo Cliente
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Clientes"
          icon={<LuUsers size={35} className="text-blue-600" />}
          description="3"
        />
        <Card
          title="Clientes Activos"
          icon={<LuBuilding size={35} className="text-green-600" />}
          description="3"
        />
      </div>

      <Tabs
        headers={["Lista de Clientes", "Historial de Ventas", "Buscar Cliente"]}
        className="mt-6"
      >
        <ListarClientes data={clientes} />
        <div>2</div>
        <div>3</div>
      </Tabs>
    </div>
  );
}
