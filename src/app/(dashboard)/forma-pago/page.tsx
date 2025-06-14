import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { FiPlus } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";

export default function FormasDePagoPage() {
  return (
    <div className="w-full p-8 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-green-100 p-3 rounded-full">
            <LuCreditCard size={24} className="text-green-400" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Formas de Pago</p>
            <p className="text-sm">
              Gestiona los métodos de pago disponibles para tus clientes
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold bg-green-500">
          <FiPlus size={15} />
          Nuevo Forma de Pago
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Métodos"
          icon={<LuCreditCard size={35} className="text-green-400" />}
          description="5"
        />
        <Card
          title="Metodos Activos"
          icon={<LuCircleCheckBig size={35} className="text-green-400" />}
          description="4"
        />
      </div>
    </div>
  );
}
