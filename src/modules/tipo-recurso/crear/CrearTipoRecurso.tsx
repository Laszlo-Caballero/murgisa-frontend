import Input from "@/components/ui/input/Input";
import React from "react";

import { LuLayers } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";




export default function CrearTipoRecurso() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuLayers size={40} className="text-red-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nuevo Tipo de Recurso</p>
                <p className="text-sm text-gray-500">
                Completa los datos para registrar un nuevo tipo de recurso en el sistema
                </p>
            </div>
        </header>
        <div className="grid grid-cols-1 gap-4">
            <Input
                label="Nombre del Tipo de Recurso"
                icon={<LuLayers />}
                placeholder="Ej: Contrucción de Andenes"
            />
            <Input
                label="Descripción"
                icon={<LuPencilLine />}
                placeholder="Describe las características del tipo de recurso"/>
        
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Tipo de recurso
            </Button>
        </div>
    </div>
    )
}