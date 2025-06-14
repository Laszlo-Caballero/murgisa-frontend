import Input from "@/components/ui/input/Input";
import React from "react";
import Select from "@/components/ui/select/Select";

import { PiMoneyWavyLight } from "react-icons/pi";
import { LuClock, LuClock4 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuCirclePlus } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";




export default function CrearServicio() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuWrench size={40} className="text-purple-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nuevo Servicio</p>
                <p className="text-sm text-gray-500">
                Completa los datos para registrar un nuevo servicio en el sistema
                </p>
            </div>
        </header>
        <div className="grid grid-cols-2 gap-4">
            <Input
                label="Nombre del Servicio"
                icon={<LuWrench />}
                placeholder="Ej: Contrucción de Andenes"
            />
            <Select
                label="Categoria"
                icon={<LuCirclePlus />}
                placeholder="Selecciona una categoría"
                options={[
                    { value: "1", label: "Construcción" }]}>

            </Select>
            <Input
                label="Descripción"
                icon={<LuPencilLine />}
                placeholder="Describe las características del servicio"/>
            <Input
                label="Duración Estimada"
                icon={<LuClock />}
                placeholder="Ej: 4 "/>
            <Input
                label="Precio"
                icon={<PiMoneyWavyLight />}
                placeholder="Ej: S/. 1500 "/>          
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-purple-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Servicio
            </Button>
        </div>
    </div>
    )
}