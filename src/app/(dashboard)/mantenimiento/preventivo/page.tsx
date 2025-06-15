import { LuShield } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheck } from "react-icons/lu";
import { LuCirclePlay } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuTriangleAlert } from "react-icons/lu";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { PlanificacionPreventivo } from "@/interfaces/response.interface";
import ListarPreventivos from "@/modules/preventivo/listar/listar";
import{preventivoData} from "@/data/preventivo";
import ListarCalendario from "@/modules/preventivo/calendario/calendario";


export default function MantenimientoPreventivoPage() {

  const preventivo: PlanificacionPreventivo[] = preventivoData;

  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <span className="bg-orange-500 p-3 rounded-xl">
                <LuShield size={40} className="text-white" />
              </span>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Mantenimiento Preventivo</p>
                <p className="text-sm mt-1">
                  Gestiona y monitorea los mantenimientos preventivos programados
                </p>
              </div>
            </div>
            <Button className="flex items-center gap-x-3 py-2 font-semibold mt-4 bg-orange-500 text-white shadow-md">
              <FiPlus size={15} />
              Planificar Mantenimiento
            </Button>
          </header>
          <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
            <Card
              title="Total"
              icon={<LuShield size={28} className="text-blue-600" />}
              description="10"
              className = {{ container: "bg-blue-100 shadow-lg", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" }}}
            />
            <Card
              title="Completados"
              icon={<LuCircleCheck size={28} className="text-green-600" />}
              description="6"
              className = {{ container: "bg-green-100 shadow-lg", text:{title:"text-green-700" ,description:"text-green-900 text-3xl" }}}
            />
            <Card
              title="En Progreso"
              icon={<LuCirclePlay size={28} className="text-orange-600" />}
              description="3"
              className = {{ container: "bg-orange-100 shadow-lg", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" }}}
            />         
            <Card
              title="Atrasados"
              icon={<LuTriangleAlert size={28} className="text-red-600" />}
              description="1"
              className = {{ container: "bg-red-100 shadow-lg", text:{title:"text-red-700" ,description:"text-red-900 text-3xl" }}}
            /> 
            {/* <Card
              title="Costo Total"
              icon={<LuChartColumn size={28} className="text-purple-600" />}
              description="S/. 820"
              className = {{ container: "bg-purple-100 shadow-lg", text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" }}}
            />     */}
          </div>
          <Tabs
            headers={["Lista de Mantenimientos", "Vista Calendario"]}
            className="mt-6"
          >
          <ListarPreventivos data={preventivo} />
          <ListarCalendario data={preventivo} />
          </Tabs> 
    </div>
  );
}
