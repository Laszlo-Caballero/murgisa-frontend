import Input from "@/components/ui/input/Input";
import React from "react";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";



export default function CrearTipoMantenimiento() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuSettings size={40} className="text-orange-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nuevo Mantenimiento</p>
                <p className="text-sm text-gray-500">
                Configura un nuevo tipo de mantenimiento para el sistema
                </p>
            </div>
        </header>
        <div className="flex flex-col gap-y-4">
            <Input
                label="Nombre del Mantenimiento"
                icon={<LuSettings />}
                placeholder="Ej: Mantenimiento Electrónico"
            />
            <Input
                label="Descripción"
                icon={<LuPencilLine />}
                placeholder="Describe el tipo de mantenimiento, procedimiento, objetivos..."
            />
            <Input
                label="Duracion"
                icon={<LuClock4 />}
                placeholder="Ej: 4 horas"
            />       
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-orange-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Mantenimiento
            </Button>
        </div>
    </div>
    )
}