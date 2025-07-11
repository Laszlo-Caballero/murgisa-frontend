import Card from "@/components/ui/card/Card";
import { LuFilter, LuShoppingCart } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import Table from "@/components/ui/table/Table";
import Badge from "@/components/ui/badge/Badge";
import { VentasColumns } from "@/columns/VentasColumns";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import CrearVenta from "@/modules/ventas/crear/CrearVenta";
import { FiPlus } from "react-icons/fi";
import { ApiRequest } from "@/libs/api";
import { Response, Venta } from "@/interfaces/responsefinal.interface";

export default async function VentasPagina() {
  const data = await ApiRequest<Response<Venta[]>>({
    metod: "get",
    endpoint: "venta",
  });

  return (
    <div className="w-full h-full bg-gray-100 p-8 flex flex-col overflow-x-hidden dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700">
        <span className="bg-green-400/30 p-2 rounded-xl max-w-max mb-2 lg:p-3">
          <LuShoppingCart className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl ">Gestión de Ventas</p>
          <p className="text-sm">
            Administra y controla todas las ventas de MURGISA
          </p>
        </div>
        <ButtonModal
          className="flex items-center absolute md:static right-0 translate-y-[165%] -translate-x-[22%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6  hover:bg-green-500 mb-2 bg-green-400/50"
          modal={<CrearVenta />}
        >
          <FiPlus size={15} />
          Nueva Venta
        </ButtonModal>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-x-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Ventas"
          icon={
            <LuShoppingCart
              size={28}
              className="text-white dark:text-blue-400"
            />
          }
          description={"20"}
          extra="Registradas en el sistema"
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
          title="Ingresos Totales"
          icon={
            <LuDollarSign
              size={28}
              className="text-white dark:text-purple-400"
            />
          }
          description={"S/. 1800"}
          extra="Suma generada por venats"
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
          title="Ventas Completadas"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-green-400"
            />
          }
          description={"28"}
          extra="Finalizadas exitosamente"
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-400",
              description: "text-green-900 text-3xl dark:text-green-400",
              extra: "text-green-600 dark:text-green-400",
            },
          }}
        />
        <Card
          title="Ventas Canceladas"
          icon={
            <IoWarningOutline
              size={28}
              className="text-white dark:text-red-400"
            />
          }
          description={"0"}
          extra="Anuladas o sin Concretar"
          className={{
            container:
              "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-600/30",
            text: {
              title: "text-red-700 dark:text-red-500",
              description: "text-red-900 text-3xl dark:text-red-500",
              extra: "text-red-600 dark:text-red-500",
            },
          }}
        />
      </div>
      <div className="py-4 flex w-full flex-col gap-y-4">
        <div className="flex w-full flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700 ">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter
              size={20}
              className="text-green-500 dark:text-green-400"
            />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Utiliza los filtros para encontrar clientes específicos de manera
            rápida
          </p>
        </div>

        <div className="flex flex-col items-start justify-between w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800 dark:border dark:border-gray-700 ">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium text-black text-xl dark:text-white ">
              Ventas Registradas
            </p>
            <Badge className="bg-gray-50 text-xs text-gray-600 font-bold border-gray-300 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300">
              Total: {data?.data.length || 0}
            </Badge>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
              Gestiona todos las ventas registradas en el sistema
            </p>
          </div>
          <Table
            className="mt-4 bg-white w-full rounded-md "
            data={data?.data || []}
            columns={VentasColumns}
          />
        </div>
      </div>
    </div>
  );
}
