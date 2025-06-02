import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";

export default function FormasDePagoPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
      <p className="text-3xl">Formas de Pago</p>

      <div className="relative w-full  border border-slate-40 mt-4">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Forma de Pago
        </p>

        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between">
            <Input
              id="txtFormaPago"
              label="Forma de Pago:"
              className="flex-row"
            />

            <Button title="Agregar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtTipoFormaPago"
              label="Tipo de Forma de Pago:"
              className="flex-row gap-x-2"
              type="text"
            />
            <Button title="Modificar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="chkEstado"
              label="Estado del Servicio"
              className="flex-row-reverse gap-x-2 max-w-max"
              type="checkbox"
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
              <th className="text-center">Forma de Pago</th>
              <th className="text-center">Fecha de Registro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-2">1</td>
              <td className="text-center">Efectivo</td>
              <td className="text-center">2023-10-01</td>
            </tr>
            <tr>
              <td className="text-center py-2">2</td>
              <td className="text-center">Tarjeta de Crédito</td>
              <td className="text-center">2023-10-02</td>
            </tr>
            <tr>
              <td className="text-center py-2">3</td>
              <td className="text-center">Transferencia Bancaria</td>
              <td className="text-center">2023-10-03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
