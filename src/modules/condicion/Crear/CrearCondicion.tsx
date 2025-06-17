import Input from "@/components/ui/input/Input";
import React from "react";
import Select from "@/components/ui/select/Select";

import { LuSearch } from "react-icons/lu";
import { LuBriefcase } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";

export default function CrearCondicion() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuSearch size={40} className="text-purple-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nueva Condicion</p>
                <p className="text-sm text-gray-500">
                Completa los datos para registrar una nueva condicion en el sistema
                </p>
            </div>
        </header>
        <div className="grid grid-cols-2 gap-4">
            <Input
                label="Nombre de condición"
                icon={<LuBriefcase />}
                placeholder="Condicion**"/>
            <Input
                label="Descripción"
                icon={<LuPencilLine />}
                placeholder="Describe la condicion"/>      
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-purple-600 text-white py-3 font-semibold hover:bg-purple-500">
                <FiPlus size={15} className="mr-2" />
                Registrar condicion 
            </Button>
        </div>
    </div>
    )
}