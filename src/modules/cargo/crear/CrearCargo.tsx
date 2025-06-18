import { LuBriefcase } from "react-icons/lu";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { LuPencilLine } from "react-icons/lu";
import { BsFilePost } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";


export default function CrearCargo(){
    return(
        <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
            <header className="flex items-center gap-x-3">
                <LuBriefcase size={40} className="text-blue-600" />
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">Agregar Nuevo Cargo</p>
                    <p className="text-sm text-gray-500">
                    Completa los datos para registrar un nuevo cargo en el sistema
                    </p>
            </div>
            </header>
            <div className="grid grid-cols-1 gap-4">
                <Input
                label="Nombre del Cargo"
                icon={<BsFilePost />}
                placeholder="Ej: Pendejo No Dura Nada"
                />
                <Input
                label="Descripcion"
                icon={<LuPencilLine />}
                placeholder="Ej: Laszlo"
                />
            </div>
            <div>
                <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
                    <FiPlus size={15} className="mr-2" />
                    Registrar Cargo
                </Button>
            </div>
        </div>
    )
}