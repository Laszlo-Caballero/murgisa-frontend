import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { FiPlus } from "react-icons/fi";
import { LuFilter, LuShoppingCart } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import Table from "@/components/ui/table/Table";

export default function VentasPagina() {
  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-100 p-3 rounded-full">
            <LuShoppingCart size={24} className="text-blue-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Ventas</p>
            <p className="text-sm">
              Administra y controla todas las ventas de MURGISA
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold px-6">
          <FiPlus size={15} />
          Nueva Venta
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Ventas"
          icon={<LuShoppingCart size={35} className="text-purple-600" />}
          description={"0"}
        />
        <Card
          title="Ingresos Totales"
          icon={<LuDollarSign size={35} className="text-green-600" />}
          description={"2"}
        />
        <Card
          title="Ventas Completadas"
          icon={<LuCircleCheckBig size={35} className="text-blue-600" />}
          description={"0"}
        />
        <Card
          title="Ventas Canceladas"
          icon={<IoWarningOutline size={35} className="text-red-600" />}
          description={"0"}
        />
      </div>

      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-lg shadow">
          <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
            <LuFilter />
            Filtros
          </span>
        </section>

        <div className="flex flex-col w-full rounded-lg shadow p-4">
          <p className="font-medium text-black text-2xl">Ventas Registradas</p>

          {/* <Table className="mt-4" data={[]} columns={[]} /> */}
        </div>
      </div>
    </div>
  );
}
