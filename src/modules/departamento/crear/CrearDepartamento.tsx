import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import { LuBuilding2, LuUsers, LuPencilLine } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export default function CrearDepartamento() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
   
      <header className="flex items-center gap-x-3">
        <LuBuilding2 size={40} className="text-blue-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-black dark:text-white">
            Agregar Departamento
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar un nuevo departamento en el sistema
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <Input
          label="Nombre del Departamento"
          icon={<LuBuilding2 />}
          placeholder="Ej: Departamento de Ingeniería"
          className="dark:text-white dark:placeholder-white"
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las funciones principales del departamento"
          className="dark:text-white dark:placeholder-white"
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Departamento
        </Button>
      </div>
    </div>
  );
}
