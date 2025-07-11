import { FiPlus } from "react-icons/fi";
import { LuBuilding2, LuCircleCheckBig, LuShoppingCart } from "react-icons/lu";

import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";

import ListarProveedor from "@/modules/proveedor/listar/Listar";
import ListarTipoRecurso from "@/modules/proveedor/tipo/tipo";

import { proveedorData } from "@/data/proveedor";
import { tipoRecursoData } from "@/data/tipoRecurso";
import { ApiRequest } from "@/libs/api";
import { Proveedor } from "@/interfaces/response.interface";
import ButtonModal from "@/components/share/button-modal/ButtonModal";
import CrearProveedor from "@/modules/proveedor/crear/CrearProveedor";

export default async function ProveedorPage() {
  const data = await ApiRequest<Proveedor[]>({
    metod: "get",
    endpoint: "proveedor",
  });
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-600/90 dark:to-red-900">
        <span className="bg-red-400/60 p-2 rounded-xl max-w-max mb-2 lg:p-3 dark:bg-red-400/30">
          <LuBuilding2 className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white ">
          <p className="font-bold text-3xl">Gestión de Proveedores</p>
          <p className="text-sm mt-1 ">
            Administra y controla todos los proveedores de MURGISA
          </p>
        </div>
        <ButtonModal
          modal={<CrearProveedor />}
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[20%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-red-500/70 mb-2 bg-red-400/40 dark:bg-red-500/50"
        >
          <FiPlus size={15} />
          Nuevo Proveedor
        </ButtonModal>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Proveedores"
          icon={
            <LuBuilding2 size={28} className="text-white dark:text-red-400" />
          }
          description="20"
          extra="Registrados en la empresa"
          className={{
            container:
              "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-400/10 dark:transition-all",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30",
            text: {
              title: "text-red-700 dark:text-red-400",
              description: "text-red-900 text-3xl dark:text-red-400",
              extra: "text-red-600 dark:text-red-400",
            },
          }}
        />

        <Card
          title="Proveedores Activos"
          icon={
            <LuCircleCheckBig
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description="18"
          extra="Disponibles en la empresa"
          className={{
            container:
              "bg-emerald-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-emerald-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />

        <Card
          title="Total Compras"
          icon={
            <LuShoppingCart
              size={28}
              className="text-white dark:text-purple-400"
            />
          }
          description="48"
          extra="Del Mes"
          className={{
            container:
              "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />

        <Card
          title="Más Frecuente"
          icon={
            <LuShoppingCart
              size={28}
              className="text-white dark:text-orange-400"
            />
          }
          description="Proveedor A"
          extra="Del Mes"
          className={{
            container:
              "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-orange-400/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>

      <Tabs
        headers={["Catálogo de Proveedores", "Por Tipo de Recurso"]}
        className="mt-6 dark:text-red-400"
      >
        <ListarProveedor data={proveedorData} />
        <ListarTipoRecurso data={tipoRecursoData} />
      </Tabs>
    </div>
  );
}
