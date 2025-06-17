import { LuPackage } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { MdSocialDistance } from "react-icons/md";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { LuBuilding2 } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";


import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";

export default function CrearRecurso()
{
    return(
        <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
            <header className="flex items-center gap-x-3">
                <LuPackage size={40} className="text-red-600" />
                <div className="flex flex-col">
                    <p className="text-xl font-semibold">Agregar Recurso</p>
                    <p className="text-sm text-gray-500">
                        Completa los datos para registrar un nuevo recurso en el sistema
                    </p>
                </div>              
            </header>
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Nombre del Recurso"
                    icon={<LuPackage />}
                    placeholder="Ej: Recurso"
                />
                <Select
                    label="Categoria"
                    icon={<LuLayers />}
                    placeholder="Selecciona una categoría"
                    options={[{ value: "1", label: "Tipo de Recurso" }]}
                ></Select>
                <Select
                    label="Disponibilidad"
                    icon={<MdSocialDistance />}
                    placeholder="Selecciona Disponibilidad"
                    options={[{ value: "1", label: "Tipo de Recurso" }]}
                ></Select>
                <Select
                    label="Condicion"
                    icon={<VscDebugBreakpointConditionalUnverified />}
                    placeholder="Selecciona una Condicion"
                    options={[{ value: "1", label: "Tipo de Recurso" }]}
                ></Select>
                <Select
                    label="Proveedor"
                    icon={<LuBuilding2 />}
                    placeholder="Selecciona un Proveedor"
                    options={[{ value: "1", label: "Tipo de Recurso" }]}
                ></Select>

                <Input
                    label="Precio"
                    icon={<CiMoneyBill />}
                    placeholder="Ej: 2 so"
                />
            </div>
            <div>
                <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-blue-500">
                    <FiPlus size={15} className="mr-2" />
                    Registrar Recurso
                </Button>
            </div>
        </div>
    )
}