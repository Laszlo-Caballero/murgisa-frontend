import Input from "@/components/ui/input/Input";
import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";




export default function CrearProfesion() {
    return(
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
        <header className="flex items-center gap-x-3">
            <LuGraduationCap size={40} className="text-blue-600 mb-2" />
            <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nueva Profesión</p>
                <p className="text-sm text-gray-500">
                Completa los datos para registrar una nueva profesión en el sistema
                </p>
            </div>
        </header>
        <div className="flex flex-col gap-y-4">
            <Input
                label="Titulo de la Profesión"
                icon={<LuGraduationCap />}
                placeholder="Ej: Ingeniero de Sistemas"
            />
            <Input
                label="Descripción"
                icon={<LuPencilLine />}
                placeholder="Describe las responsabilidad y funcipnes principales"
            />
        </div>
        <div>
            <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Profesión
            </Button>
        </div>
    </div>
    )
}