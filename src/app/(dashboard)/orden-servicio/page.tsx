import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";

export default function OrdenServicioPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl p-4">
      <p className="text-3xl font-bold mb-4">Orden de Servicio</p>

      <div className="w-full border border-gray-300 rounded p-4 relative">
        <p className="absolute top-0 -translate-y-3 translate-x-2 px-2 bg-white">
          Datos Orden de Servicio
        </p>

        <div className="flex justify-between gap-4 mt-4">
          <div className="flex flex-col gap-2 w-1/3">
            <Input label="Orden de Servicio:" id="txtOrden" type="text" />
            <Input label="Venta:" id="txtVenta" type="text" />
            <Input label="Cliente:" id="txtCliente" type="text" />
            <div className="flex items-center gap-2">
              <label htmlFor="fecha" className="text-sm font-medium">
                Fecha de Registro:
              </label>
              <input
                id="fecha"
                type="date"
                className="border px-2 py-1 rounded"
              />
            </div>
            <Button title="Buscar" />
          </div>

          <div className="bg-gray-400 w-2/3 h-40 border border-gray-600" />

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Servicios</p>
            <Button title="Guardar Orden" />
            <Button title="Anular Orden" />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full mt-6 gap-4">
        <div className="bg-gray-400 w-1/2 h-48 border border-gray-600" />
        <div className="bg-gray-400 w-1/2 h-48 border border-gray-600" />
      </div>
    </div>
  );
}