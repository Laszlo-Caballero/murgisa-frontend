"use client";

import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarProveedor from "@/modules/proveedor/listar/Listar";
import { proveedorData } from "@/data/proveedor"; 
import ListarTipoRecurso from "@/modules/proveedor/tipo/tipo";
import { tipoRecursoData } from "@/data/tipoRecurso";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import CrearProveedor from "@/modules/proveedor/crear/CrearProveedor";

import { LuBuilding2 } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";



export default function ProveedorPage(){
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="w-full h-full p-8 flex flex-col bg-gray-100">
            {showModal && (
                <Modal
                    onClose={() => {
                    setShowModal(false);
                    }}
                >
                    <CrearProveedor/>
                </Modal>
            )}
            <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
                    <span className="bg-red-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
                        <LuBuilding2 className="text-white size-8 lg:size-10" />
                    </span>
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">Gestión de Proveedores</p>
                        <p className="text-sm mt-1">
                            Administra tu red de proveedores y socios comerciales
                        </p>
                </div>
                <Button className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-red-600 hover:bg-red-500 mb-2"  
                onClick={() => {
                setShowModal(true);
                }}>
                <FiPlus size={15} />
                    Nuevo Proveedor
                </Button>
            </header>

            <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Total Proveedores"
                    icon={<LuBuilding2 size={28} className="text-white" />}
                    description="20"
                    extra="Registrados en la empresa"
                    className = {{ container: "bg-blue-100 shadow-lg" , icon: "bg-blue-600 rounded-full p-3", text:{title:"text-blue-700" ,description:"text-blue-900 text-3xl" ,extra: "text-blue-600"} }}
                />
                <Card
                    title="Proveedores Activos"
                    icon={<LuCircleCheckBig size={28} className="text-white" />}
                    description="18"
                    extra="Disponibles en la empresa"
                    className = {{ container: "bg-emerald-100 shadow-lg" , icon: "bg-emerald-600 rounded-full p-3", text:{title:"text-emerald-700" ,description:"text-emerald-900 text-3xl" ,extra: "text-emerald-600"} }}
                />
                <Card
                    title="Total Compras"
                    icon={<LuShoppingCart size={28} className="text-white" />}
                    description="48"
                    extra="Del Mes"
                    className = {{ container: "bg-purple-100 shadow-lg" , icon: "bg-purple-600 rounded-full p-3", text:{title:"text-purple-700" ,description:"text-purple-900 text-3xl" ,extra: "text-purple-600"} }}
                />
                <Card
                    title="Más Frecuente"
                    icon={<LuShoppingCart size={28} className="text-white" />}
                    description="Proveedor A "
                    extra="Del Mes"
                    className = {{ container: "bg-orange-100 shadow-lg" , icon: "bg-orange-600 rounded-full p-3", text:{title:"text-orange-700" ,description:"text-orange-900 text-xl" ,extra: "text-orange-600"} }}
                />
            </div>
            <Tabs
            headers={["Catalogo de Proveedores", "Por Tipo de Recurso"]}
            className="mt-6">
            <ListarProveedor data={proveedorData}/>
            <ListarTipoRecurso data={tipoRecursoData}/>
            </Tabs>

        </div>
    )
}