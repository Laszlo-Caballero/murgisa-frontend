import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";

export default function ServiciosPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
      <p className="text-3xl">Servicios</p>

      <div className="relative w-full  border border-slate-40 mt-4">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Datos del Servicio
        </p>

        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between">
            <Input id="txtServicio" label="Servcio:" className="flex-row" />
            <Input
              id="chkEstado"
              label="Estado del Servicio"
              className="flex-row-reverse gap-x-2 max-w-max"
              type="checkbox"
            />

            <Button title="Agregar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtNombre"
              label="Nombre del Servicio:"
              className="flex-row gap-x-2"
              type="text"
            />
            <Button title="Modificar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtPrecio"
              label="Precio:"
              className="flex-row gap-x-2"
              type="text"
            />
            <Button title="Deshabilitar" />
          </div>
        </div>
      </div>

      <div className="max-h-[500px] w-full overflow-y-scroll mt-6">
        <table className="bg-slate-300 w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-center py-2">ID</th>
              <th className="text-center">Nombre del Servicio</th>
              <th className="text-center">Fecha de Registro</th>
              <th className="text-center">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-2">1</td>
              <td className="text-center">Servicio 1</td>
              <td className="text-center">01/01/2023</td>
              <td className="text-center">$100.00</td>
            </tr>
            <tr>
              <td className="text-center py-2">2</td>
              <td className="text-center">Servicio 2</td>
              <td className="text-center">02/01/2023</td>
              <td className="text-center">$150.00</td>
            </tr>
            <tr>
              <td className="text-center py-2">3</td>
              <td className="text-center">Servicio 3</td>
              <td className="text-center">03/01/2023</td>
              <td className="text-center">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
