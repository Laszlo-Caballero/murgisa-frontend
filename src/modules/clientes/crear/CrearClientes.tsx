import Button from "@/components/ui/button/Button";
import { LuUsers } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CiMail, CiPhone, CiCirclePlus } from "react-icons/ci";
import { LuMapPinHouse } from "react-icons/lu";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";


export default function CrearCliente() {
  return (
    <div className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 ">
      <header className="flex items-center gap-x-3">
        <LuUsers size={40} className="text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">Agregar Nuevo Cliente</p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo cliente en el sistema
          </p>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
        <Input
          label="Nombre del Cliente"
          icon={<MdOutlinePersonOutline />}
          placeholder="Ej: Juan Pérez"
        />
        <Input
          label="Correo del Cliente"
          icon={<CiMail />}
          placeholder="Ej: correo@ejemplo.com"
          type="email"
        />
        <Input
          label="Dirección"
          icon={<CiMail />}
          placeholder="Ej: Av. Principal 123"
          type="email"
        />
        <Input
          label="Dni"
          icon={<FaAddressCard />}
          placeholder="Ej: 74185296"
          type="email"
        />
        <Input
          label="Telefono"
          icon={<FaAddressCard />}
          placeholder="Ej: 987654321"
          type="email"
        /> 
        <Select
          label="Ciudad"
          icon={<CiCirclePlus />}
          placeholder="Selecciona un Proveedor"
          options={[{ value: "1", label: "Ciudad1" } ,{ value: "2", label: "Ciudad2" } ]}
        ></Select>     
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500/30">
          Registrar Cliente
        </Button>
      </div>
    </div>
  );
}
