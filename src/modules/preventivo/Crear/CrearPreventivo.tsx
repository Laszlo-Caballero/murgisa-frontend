import { FiPlus } from "react-icons/fi";
import { GrHostMaintenance, GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDateRange, MdLowPriority } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import { LuCirclePlus } from "react-icons/lu";
import InputDate from "@/components/ui/input-date/InputDate";
import Select from "@/components/ui/select/Select";

export default function CrearPreventivo() {
  return (
    <div className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <header className="flex items-center gap-x-3">
        <GrHostMaintenance size={40} className="text-orange-500" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-white">
            Agregar una planificación de mantenimiento
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar una nueva planificación en el
            sistema
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <InputDate
          label="Fecha de Mantenimiento"
          icon={<MdDateRange />}
          placeholder="Selecciona una fecha"
        />

        <Select
          label="Prioridad"
          icon={<MdLowPriority />}
          placeholder="Selecciona la prioridad"
        />

        <Select
          label="Recurso de Mantenimiento"
          icon={<LuCirclePlus />}
          placeholder="Selecciona el recurso de mantenimiento"
        />

        <Select
          label="Personal Encargado"
          icon={<GrUserWorker />}
          placeholder="Selecciona el personal encargado"
        />
        <Select
          label="Horario de Mantenimiento"
          icon={<MdLowPriority />}
          placeholder="Selecciona el horario de mantenimiento"
        />
      </div>

      <Button className="flex items-center gap-x-3 mt-4 bg-orange-500 text-white py-3 font-semibold hover:bg-orange-400">
        <FiPlus size={15} className="mr-2" />
        Registrar Planificación
      </Button>
    </div>
  );
}
