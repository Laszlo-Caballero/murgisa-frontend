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
            <Button className="flex items-center gap-x-3 py-2 font-semibold mt-4 bg-orange-500 text-white shadow-md hover:bg-orange-400">
              <FiPlus size={15} />
              Planificar Mantenimiento
            </Button>
          </header>
          <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
            <Card
              title="Total"
              icon={<LuShield size={28} className="text-white" />}
              description="10"
              extra="Mantenimientos planificados en el sistema"
              className = {{ container: "bg-blue-100 shadow-lg", 
                icon: "bg-blue-600 rounded-full p-3 shadow-xl",
                text:{
                  title:"text-blue-700" ,
                  description:"text-blue-900 text-3xl",
                  extra: "text-blue-800 text-xs"
              }}}
            />
            <Card
              title="Completados"
              icon={<LuCircleCheck size={28} className="text-white" />}
              description="6"
              extra="Correctamente por los responsables."
              className = {{ 
                container: "bg-green-100 shadow-lg", 
                icon: "bg-green-600 rounded-full p-3 shadow-xl",
                text:{title:"text-green-700",
                description:"text-green-800 text-3xl", 
                extra: "text-green-800 text-xs"}}}
            />
            <Card
              title="En Progreso"
              icon={<LuCirclePlay size={28} className="text-white" />}
              description="3"
              extra="Están siendo trabajadas actualmente."
              className = {{ 
                container: "bg-orange-100 shadow-lg", 
                icon: "bg-orange-600 rounded-full p-3 shadow-xl",
                text:{title:"text-orange-700" ,
                description:"text-orange-900 text-3xl",
                extra: "text-orange-800 text-xs" }}}
            />         
            <Card
              title="Atrasados"
              icon={<LuTriangleAlert size={28} className="text-white" />}
              description="1"
              extra=" No se completaron en la fecha estimada"
              className = {{ 
                container: "bg-red-100 shadow-lg",
                icon: "bg-red-600 rounded-full p-3 shadow-xl",
                text:{title:"text-red-700" ,
                description:"text-red-900 text-3xl",
                extra: "text-orange-900 text-xs"}}}
            /> 
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
