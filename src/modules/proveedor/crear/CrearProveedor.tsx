import { LuBuilding2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { PiIdentificationCardLight } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuBarcode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";


import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

export default function CrearProveedor(){
    return(
        <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
            <header className="flex items-center gap-x-3">
                <LuBuilding2 size={40} className="text-red-600 mb-2" />
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">Agregar Nuevo Proveedor</p>
                    <p className="text-sm text-gray-500">
                    Completa los datos para registrar un nuevo proveedor en el sistema
                    </p>
                </div>
            </header>
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Razon Social"
                    icon={<LuBuilding2 />}
                    placeholder="Ej: RentaMaq Perú S.A.C."
                />
                <Input
                    label="RUC"
                    icon={<LuBarcode />}
                    placeholder="Ej: 20481234567"
                />
                <Input
                    label="Nombre del Responsable"
                    icon={<LuUserRound />}
                    placeholder="Ej: Fernando Torres"
                />
                <Input
                    label="DNI"
                    icon={<PiIdentificationCardLight />}
                    placeholder="Ej: 45672198"
                />
                <Input
                    label="Email"
                    icon={<LuMail />}
                    placeholder="Ej: 45672198"
                    type="email"
                />
            </div>
            <div>
                <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-red-500">
                    <FiPlus size={15} className="mr-2" />
                    Registrar Proveedor
                </Button>
            </div>
        </div>
    )
}