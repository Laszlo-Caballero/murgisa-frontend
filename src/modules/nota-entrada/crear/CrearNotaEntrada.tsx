import Input from "@/components/ui/input/Input";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { LuCar } from "react-icons/lu";
import Select from "@/components/ui/select/Select";
import { LuPackage } from "react-icons/lu";


export default function CrearNotaEntrada() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuCar size={40} className="text-pink-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nueva Nota de Entrada</p>
                <p className="text-sm text-gray-500">
                Completa los datos para registrar una nueva nota de entrada en el sistema
                </p>
            </div>
        </header>
        <div className="flex flex-col gap-y-4">
            <Select
                label="Recurso"
                icon={<LuPackage/>}
                placeholder="Selecciona un Recurso"
                options={[
                { value: "1", label: "Material" },
                { value: "2", label: "Herramienta" },
                ]}>
            </Select>
            <Input
                label="Cantidad"
                icon={<LuPencilLine />}
                placeholder="Indique la cantidad a recibir"
            />
            <Input
                label="Fecha"
                type="date"
                placeholder=""
                
            />
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-pink-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Nota de Entrada
            </Button>
        </div>
    </div>
    )

}