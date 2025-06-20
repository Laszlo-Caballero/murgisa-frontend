import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { MdOutlinePayments } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export default function CrearFormaPago() {
  return (
    <div className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 ">
      <header className="flex items-center gap-x-3">
        <MdOutlinePayments size={40} className="text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">Agregar Forma de Pago</p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar una nueva forma de pago en el
            sistema
          </p>
        </div>
      </header>
      <div className="grid gap-4 dark:text-gray-300">
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
        <Button className="flex items-center gap-x-3 mt-4  bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500 dark:bg-blue-500/30">
          <FiPlus size={15} className="mr-2" />
          Registrar Forma de Pago
        </Button>
      </div>
    </div>
  );
}
