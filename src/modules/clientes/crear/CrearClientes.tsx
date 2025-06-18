import Button from "@/components/ui/button/Button";
import { LuUsers} from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CiMail, CiPhone, CiCirclePlus } from "react-icons/ci";
import { LuMapPinHouse } from "react-icons/lu";



export default function CrearCliente(){
    return(
        <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
            <header className="flex items-center gap-x-3">
                <LuUsers size={40} className="text-blue-600" />
                <div className="flex flex-col">
                <p className="text-xl font-semibold">Agregar Nuevo Cliente</p>
                <p className="text-sm text-gray-500">
                    Completa los datos para registrar un nuevo cliente en el sistema
                </p>
                </div>
            </header>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre</label>
                    <div className="relative">
                    <MdOutlinePersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Correo</label>
                    <div className="relative">
                    <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Ej: correo@ejemplo.com"
                        className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Dirección</label>
                    <div className="relative">
                    <LuMapPinHouse className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Ej: Av. Principal 123"
                        className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">DNI</label>
                    <div className="relative">
                    <FaAddressCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Ej: 74185296"
                        className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Teléfono</label>
                    <div className="relative">
                    <CiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Ej: 987654321"
                        className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Ciudad</label>
                    <div className="relative">
                    <CiCirclePlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Seleccione una ciudad</option>
                    </select>
                    </div>
                </div>
                </div>
            </form>
            <div className="flex justify-end">
                <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">
                Registrar Cliente
                </Button>
            </div>
        </div>
    )
}