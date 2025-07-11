import { LuBuilding2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { PiIdentificationCardLight } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuBarcode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { GrHostMaintenance, GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDateRange, MdLowPriority } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import {
  LuShield,
  LuCircleCheck,
  LuCirclePlay,
  LuTriangleAlert,
  LuCirclePlus,
} from "react-icons/lu";

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
                     Completa los datos para registrar una nueva planificación en
                     el sistema
                   </p>
                 </div>
               </header>
   
            
               <div className="grid grid-cols-1 gap-4 mt-4">
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Fecha de mantenimiento
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <MdDateRange className="text-gray-500 dark:text-gray-300" />
                     <input
                       type="date"
                       className="w-full bg-transparent outline-none text-sm placeholder-gray-400 dark:placeholder-gray-400"
                     />
                   </div>
                 </div>
   
           
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Prioridad
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <MdLowPriority className="text-gray-500 dark:text-gray-300" />
                     <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                       <option>Selecciona la prioridad</option>
                       <option value="1">Alta</option>
                       <option value="2">Media</option>
                       <option value="3">Baja</option>
                     </select>
                   </div>
                 </div>
   
            
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Recurso
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <LuCirclePlus className="text-gray-500 dark:text-gray-300" />
                     <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                       <option>Selecciona un recurso</option>
                       <option value="1">Grúa</option>
                       <option value="2">Excavadora</option>
                       <option value="3">Generador</option>
                     </select>
                   </div>
                 </div>
   
              
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Personal
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <GrUserWorker className="text-gray-500 dark:text-gray-300" />
                     <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                       <option>Selecciona el responsable del mantenimiento</option>
                       <option value="1">Técnico 1</option>
                       <option value="2">Técnico 2</option>
                       <option value="3">Técnico 3</option>
                     </select>
                   </div>
                 </div>
   
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Horario
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <AiFillSchedule className="text-gray-500 dark:text-gray-300" />
                     <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                       <option>Selecciona el horario</option>
                       <option value="1">8:00 - 10:00</option>
                       <option value="2">10:00 - 12:00</option>
                       <option value="3">14:00 - 16:00</option>
                     </select>
                   </div>
                 </div>
               </div>
   
                <Button className="flex items-center gap-x-3 mt-4 bg-orange-500 text-white py-3 font-semibold hover:bg-orange-400">
                 <FiPlus size={15} className="mr-2" />
                 Registrar Planificación
               </Button>
             </div>
  );
}
