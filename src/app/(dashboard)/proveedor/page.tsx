"use client";

import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { LuBuilding2 } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import ListarProveedor from "@/modules/proveedor/listar/Listar";
import { proveedorData } from "@/data/proveedor"; 


export default function ProveedorPage(){
    return(
        <div className="w-full h-full p-8 flex flex-col bg-gray-50">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <span className="bg-red-600 p-3 rounded-xl">
                        <LuBuilding2 size={40} className="text-white" />
                    </span>
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">Gestión de Proveedores</p>
                        <p className="text-sm mt-1">
                            Administra tu red de proveedores y socios comerciales
                        </p>
                    </div>
                </div>
                <Button className="flex items-center gap-x-3 py-3 font-semibold mt-4 bg-red-600 hover:bg-red-500" >
                <FiPlus size={15} />
                    Nuevo Proveedor
                </Button>
            </header>
            <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
                <Card
                    title="Total Proveedores"
                    icon={<LuBuilding2 size={28} className="text-white" />}
                    description="20"
                    extra="Registrados en la empresa"
                    className = {{ container: "bg-blue-50 shadow-lg" , icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
                />
                <Card
                    title="Proveedores Activos"
                    icon={<LuCircleCheckBig size={28} className="text-white" />}
                    description="18"
                    extra="Disponibles en la empresa"
                    className = {{ container: "bg-emerald-50 shadow-lg" , icon: "bg-emerald-600 rounded-full p-3", text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" ,extra: "text-emerald-600"} }}
                />
                <Card
                    title="Total Compras"
                    icon={<LuShoppingCart size={28} className="text-white" />}
                    description="48"
                    extra="Del Mes"
                    className = {{ container: "bg-orange-50 shadow-lg" , icon: "bg-orange-600 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-3xl" ,extra: "text-orange-600"} }}
                />
            </div>
            <Tabs
            headers={["Catalogo de Proveedores", "Por Tipo de Recurso"]}
            className="mt-6">
            <ListarProveedor data={proveedorData}/>
            <div>2</div>
            </Tabs>

        </div>
    )
}