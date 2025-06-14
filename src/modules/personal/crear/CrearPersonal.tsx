import Input from "@/components/ui/input/Input";
import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";

export default function CrearPersonal() {
  return (
    <div className="min-w-[800px] rounded-lg bg-white p-8 flex flex-col gap-y-4">
      <header>
        <p className="text-xl font-semibold">Agregar Nuevo Empleado</p>
        <p className="text-sm text-gray-500">
          Registra un nuevo empleado en el sistema
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Nombre"
          icon={<LuUserRound />}
          placeholder="Ingrese el nombre "
        />
        <Input
          label="Apellido Paterno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido paterno"
        />
        <Input
          label="Apellido Materno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido materno"
        />
        <Input label="Sueldo" icon={<TbCash />} placeholder="1000" />
        <Input
          label="Numero de Documento"
          icon={<HiOutlineClipboardDocumentList />}
          placeholder="920121233"
        />
        <Input label="Telefono" icon={<LuPhone />} placeholder="999999999" />
      </div>
    </div>
  );
}
