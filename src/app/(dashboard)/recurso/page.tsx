import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";

import { LuCircleCheckBig, LuClock } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";

export default function RecursoPage(){
    return(
        <div className="w-full h-full p-8 flex flex-col bg-gray-50">
            <header className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <span className="bg-red-500 p-3 rounded-xl">
                <LuPackage size={40} className="text-white" />
                </span>
                <div className="flex flex-col">
                <p className="font-bold text-3xl">Gestión de Recursos</p>
                <p className="text-sm mt-1">
                    Administra el inventario de recursos, equipos y materiales
                </p>
                </div>
            </div>
            <Button className="flex items-center gap-x-3 py-3 font-semibold mt-4 bg-red-500 text-white shadow-lg hover:bg-red-400">
                <FiPlus size={15} />
                Nuevo Recurso
            </Button>
            </header>
            <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
                <Card
                    title="Total"
                    icon={<LuPackage size={28} className="text-emerald-600" />}
                    description="20"
                    className = {{ container: "bg-emerald-100 shadow-lg", text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" }}}
                />
                <Card
                    title="Disponibles"
                    icon={<LuCircleCheckBig size={28} className="text-blue-600" />}
                    description="11"
                    className = {{ container: "bg-blue-100 shadow-lg", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" }}}
                />
                <Card
                    title="En Uso"
                    icon={<LuClock4 size={28} className="text-purple-600" />}
                    description="7"
                    className = {{ container: "bg-purple-100 shadow-lg", text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" }}}
                />
                <Card
                    title="En Mantenimiento"
                    icon={<LuWrench size={28} className="text-orange-600" />}
                    description="2"
                    className = {{ container: "bg-orange-100 shadow-lg", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" }}}
                />
            </div>
            <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                    <span className="flex items-center gap-x-2 font-semibold text-black text-md">
                    <LuFilter size={20} className="text-red-500"/>
                    Filtros de Búsqueda
                    </span>
                    <p className="text-sm mt-1 text-gray-500">Utiliza los filtros para encontrar recursos específicos de manera rápida</p>
                </section>
            </div>
        </div>
    )
}   