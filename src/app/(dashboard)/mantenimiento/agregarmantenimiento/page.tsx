import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <p>Agregar Tipo Mantenimiento</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex border h-50 w-230">
          <div className="px-3">
            <Input
              label="ID Mantenimiento"
              id="txtIdMantenimiento"
              className="py-5"
            ></Input>
            <Input label="Costo" id="txtCosto" className="py-3"></Input>
          </div>
          <div className="px-3">
            <Input
              label="Descripcion"
              id="txtDescripcion"
              className="py-5"
            ></Input>
            <Input label="Duracion" id="txtDuracion" className="py-3"></Input>
          </div>
          <div className="flex flex-col gap-y-3 px-10 py-4">
            <Button title="Agregar"></Button>
            <Button title="Modificar"></Button>
            <Button title="Cancelar" className="bg-amber-900"></Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-3">
        <div className="flex  h-80 w-200">
          <div className="flex-col bg-gray-700 h-80 w-150"></div>
          <div className="flex flex-col gap-y-5 py-20 px-5">
            <Button title="Nuevo"></Button>
            <Button title="Deshabilitar" className="bg-amber-900"></Button>
            <Button title="Cancelar" className="bg-amber-900"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
