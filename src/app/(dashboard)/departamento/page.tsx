import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";

export default function Departamento() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
      <p className="text-3xl">Departamento</p>

      <div className="relative w-full border border-slate-400 mt-4">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Datos del departamento
        </p>

        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between gap-x-4">
            <Input
              id="txtIdDepartamento"
              label="ID Departamento:"
              className="flex-row"
            />
            <Input
              id="txtCriterio"
              label="Criterio:"
              className="flex-row"
            />
            <Button title="Buscar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtNombreDepartamento"
              label="Nombre:"
              className="flex-row gap-x-2"
            />
            <Button title="Agregar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtDescripcionDepartamento"
              label="Descripción:"
              className="flex-row gap-x-2"
            />
            <Button title="Modificar" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="chkEstado" />
              <label htmlFor="chkEstado">Estado</label>
            </div>
            <Button title="Deshabilitar" />
          </div>
        </div>
      </div>

      <div className="max-h-[500px] w-full overflow-y-scroll mt-6">
        <table className="bg-slate-300 w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-center py-2">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Descripción</th>
              <th className="text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-2">1</td>
              <td className="text-center">Mantenimiento</td>
              <td className="text-center">Área de reparación</td>
              <td className="text-center">Activo</td>
            </tr>
            <tr>
              <td className="text-center py-2">2</td>
              <td className="text-center">Almacén</td>
              <td className="text-center">Control de inventario</td>
              <td className="text-center">Inactivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
