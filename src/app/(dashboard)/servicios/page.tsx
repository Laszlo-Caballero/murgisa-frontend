import { LuWrench } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { Servicio } from "@/interfaces/response.interface";
import ListarServicio from "@/modules/servicios/listar/listar";
import Tabs from "@/components/ui/tabs/Tabs";
import { servicioData } from "@/data/servicios";



export default function ServiciosPage() {

  const servicios: Servicio[] = servicioData;
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-purple-600 p-3 rounded-xl">
            <LuWrench size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Servicios</p>
            <p className="text-sm mt-1">
              Administra el catálogo de servicios profesionales de MURGISAA
            </p>
          </div>
        </div>
        <Button className="flex items-center gap-x-3 py-3 font-semibold mt-4 bg-purple-600 text-white">
          <FiPlus size={15} />
          Nueva Profesión
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total de Servicios"
          icon={<LuWrench size={28} className="text-white" />}
          description="5"
          extra="En catálogo"
          className = {{ container: "bg-purple-100 shadow-lg" , icon: "bg-purple-600 rounded-full p-3", text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" ,extra: "text-purple-600"} }}
        />
        <Card
          title="Servicios Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="4"
          extra="Disponibles"
          className = {{ container: "bg-emerald-100 shadow-md", icon: "bg-emerald-600 rounded-full p-3",text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" ,extra: "text-emerald-600"}}}
        />
        <Card
          title="Total de Ventas por Mes"
          icon={<LuChartColumnIncreasing size={28} className="text-white" />}
          description="31"
          extra="Servicios vendidos"
          className = {{ container: "bg-blue-100 shadow-md", icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
        />
        <Card
          title="Ingresos del Mes"
          icon={<LuDollarSign size={28} className="text-white" />}
          description="$ 1500"
          extra="Por servicios"
          className = {{ container: "bg-orange-100 shadow-md", icon: "bg-orange-600 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" ,extra: "text-orange-600"} }}
        />
      </div>

      <Tabs
        headers={["Catalogo de Servicios", "Por Categorias"]}
        className="mt-6"
      >
      <ListarServicio data={servicios} />
        <div>2</div>
        <div>3</div>
      </Tabs> 
    </div>
  );
}
