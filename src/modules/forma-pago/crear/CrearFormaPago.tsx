import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { MdOutlinePayments } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export default function CrearFormaPago() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg">
      <header className="flex items-center gap-x-3">
        <MdOutlinePayments size={40} className="text-blue-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Agregar Forma de Pago</p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar una nueva forma de pago en el
            sistema
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        <Input
          label="Tipo de Forma de Pago"
          icon={<MdOutlinePayments />}
          placeholder="Ej: Pago con tarjeta"
        />
        <Input
          label="Descripcion"
          icon={<MdOutlinePayments />}
          placeholder="Ej: Pago mediante tarjetas Visa, MasterCard u otras"
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4  bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Forma de Pago
        </Button>
      </div>
    </div>
  );
}
