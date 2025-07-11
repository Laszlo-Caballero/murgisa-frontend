import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import React from "react";
import { LuUsers } from "react-icons/lu";

export default function StepTwo() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <LuUsers className="size-6 text-blue-500 dark:text-blue-400" />
        <p className="font-bold text-xl">Informacion del cliente</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="md:col-span-2 flex items-end gap-x-2">
          <Input
            label="Buscar Cliente:"
            placeholder="Ingrese el nombre o razon social del cliente"
            classNameContainer="w-full"
          />
          <Button className="py-3 dark:bg-blue-500/30">Buscar</Button>
        </div>
        <Input
          label="RUC/C.I:"
          placeholder="Ingrese el RUC o C.I. del cliente"
        />
        <Input
          label="Nombre/Razon Social:"
          placeholder="Ingrese el nombre o razon social del cliente"
        />
        <Input
          label="Telefono:"
          placeholder="Ingrese el telefono del cliente"
        />
        <Input label="Email:" placeholder="Ingrese el email del cliente" />
      </div>
    </div>
  );
}
