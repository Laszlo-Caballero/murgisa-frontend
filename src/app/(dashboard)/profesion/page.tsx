import { LuGraduationCap } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { LuBookOpen } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

export default function page() {
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-100 p-3 rounded-xl">
            <LuGraduationCap size={40} className="text-blue-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Profesiones</p>
            <p className="text-sm mt-1">
              Administra las profesiones y criterios del sistema MURGISA
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold mt-4">
          <FiPlus size={15} />
          Nueva Profesión
        </Button>
      </header>
      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Profesiones"
          icon={<LuBookOpen size={28} className="text-white" />}
          description="5"
          extra="Registradas en la empresa"
          className = {{ container: "bg-blue-50 shadow-lg" , icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
        />
        <Card
          title="Profesiones Activas"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="4"
          extra="Disponibles para asignación"
          className = {{ container: "bg-purple-100 shadow-lg", icon: "bg-purple-600 rounded-full p-3",text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" ,extra: "text-purple-600"}}}
        />
        <Card
          title="Personal Asignado"
          icon={<LuUsers size={28} className="text-white" />}
          description="31"
          extra="Empleados con profesión"
          className = {{ container: "bg-orange-100 shadow-lg", icon: "bg-orange-600 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" ,extra: "text-orange-600"} }}

        />
      </div>
          <div className="py-4 flex w-full flex-col gap-y-4">
            <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white">
              <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
                <LuFilter />
                Filtros
              </span>
            </section>
      </div>

    </div>
  );
}
