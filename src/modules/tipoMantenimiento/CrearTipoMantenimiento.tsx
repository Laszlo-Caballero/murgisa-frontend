import Input from "@/components/ui/input/Input";
import React from "react";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { LuSettings, LuClock4, LuPencilLine } from "react-icons/lu";

export default function CrearTipoMantenimiento() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-800 p-8 flex flex-col gap-y-4">
      <header className="flex items-center gap-x-3">
        <LuSettings size={40} className="text-orange-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-black dark:text-white">
            Agregar Nuevo Mantenimiento
          </p>
          <p className="text-sm text-gray-500 dark:text-white">
            Configura un nuevo tipo de mantenimiento para el sistema
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-y-4">
        <Input
          label="Nombre del Mantenimiento"
          icon={<LuSettings />}
          placeholder="Ej: Mantenimiento Electrónico"
          className="dark:text-white dark:placeholder-white"
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe el tipo de mantenimiento, procedimiento, objetivos..."
          className="dark:text-white dark:placeholder-white"
        />
        <Input
          label="Duración"
          icon={<LuClock4 />}
          placeholder="Ej: 4 horas"
          className="dark:text-white dark:placeholder-white"
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-orange-500">
          <FiPlus size={15} className="mr-2" />
           Registrar Mantenimiento
        </Button>
      </div>
    </div>
  );
}

