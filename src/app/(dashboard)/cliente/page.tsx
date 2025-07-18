import { LuUsers, LuBuilding } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarClientes from "@/modules/clientes/Listar/Listar";
import { LuClock4 } from "react-icons/lu";
import CrearCliente from "@/modules/clientes/crear/CrearClientes";
import { LuStar } from "react-icons/lu";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import { ApiRequest } from "@/libs/api";
import { Cliente } from "@/interfaces/responsefinal.interface";

export default async function ClientesPage() {
  const data = await ApiRequest<Cliente[]>({
    metod: "get",
    endpoint: "cliente",
  });
  console.log(data);
  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col overflow-x-hidden dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-600 ">
        <span className="p-2 rounded-lg max-w-max mb-2 lg:p-3 bg-blue-300/30">
          <LuUsers className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl">Gestión de Clientes</p>
          <p className="text-sm">
            Administra la información de tus clientes y sus ventas
          </p>
        </div>

        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[170%] -translate-x-[14%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-blue-500 mb-2 bg-blue-500/50"
          modal={<CrearCliente />}
        >
          <FiPlus size={15} />
          Nuevo Cliente
        </ButtonModal>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Clientes"
          icon={<LuUsers size={28} className="text-white dark:text-blue-400" />}
          description={"11"}
          extra="Registrados en el sistema"
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Clientes Activos"
          icon={
            <LuBuilding
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description={"10"}
          extra="Disponibles para realizar ventas"
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Cliente Más Frecuente"
          icon={
            <LuClock4 size={28} className="text-white dark:text-purple-400" />
          }
          description={"Ana Torres"}
          extra="Según cantidad de Ventas"
          className={{
            container:
              "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Cliente Nuevo"
          icon={
            <LuStar size={28} className="text-white dark:text-orange-400" />
          }
          description={"Juan Pérez"}
          extra="Nuevas oportunidades de Venta"
          className={{
            container:
              "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>

      <Tabs headers={["Lista de Clientes"]} className="mt-6 ">
        <ListarClientes data={data} />
      </Tabs>
    </div>
  );
}
