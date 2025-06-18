import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { PiWrenchBold } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinArea } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

export default function CrearCorrectivo() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg">
      <header className="flex items-center gap-x-3">
        <PiWrenchBold size={40} className="text-orange-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold">
            Agregar Mantenimiento Correctivo
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo mantenimiento correctivo
            en el sistema
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        <Select
          label="Categoria"
          icon={<PiWrenchBold />}
          placeholder="Selecciona un Tipo de Mantenimiento Correctivo"
          options={[{ value: "1", label: "Construcción" }]}
        ></Select>
        <Input
          label="Nombre de la Maquinaria"
          icon={<PiCity />}
          placeholder="Ej: Compresor Industrial CI-001"
        />
        <Select
          label="Tecnico"
          icon={<FaRegUser />}
          placeholder="Selecciona un Tecnico"
          options={[{ value: "1", label: "Paco" }]}
        ></Select>
        <Input
          label="Ubicacion"
          icon={<PiMapPinArea />}
          placeholder="Ej: El Porvenir"
        />
        <Input
          label="Precio"
          icon={<LuDollarSign />}
          placeholder="Ej: $/ 200"
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Mantenimiento Correctivo
        </Button>
      </div>
    </div>
  );
}
