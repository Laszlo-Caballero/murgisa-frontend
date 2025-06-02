import Button from "@/components/button/Button";
import React from "react";

export default function MantenimientoCorrectivo() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl">Mantenimiento Correctivo</p>
      <div className="w-full flex gap-2">
        <div className="w-[30%] flex flex-col gap-y-3 border relative px-4">
          <p className="text absolute top-0 -translate-y-3 bg-white">
            Correctivo
          </p>
          <div className="flex flex-col gap-y-3 py-3">
            <label htmlFor="txtOrden">Nro de Orden:</label>
            <input type="text" id="txtOrden" className="w-[70%] border" />
            <label htmlFor="txtFechaOden">Fecha de Orden:</label>
            <input type="date" className="w-[25%] border" />
            <label htmlFor="txtPedido">Pedido:</label>
            <select name="" id="txtPedido" className="w-[40%] border">
              <option value="">Opcion 1</option>
              <option value="">Opcion 2</option>
            </select>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="txtProveedor">Proveedor:</label>
              <input
                type="text"
                name=""
                id="txtProveedor"
                className="w-[70%] border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="txtMaquinaria">Maquinaria:</label>
              <input
                type="text"
                name=""
                id="txtMaquinaria"
                className="w-[70%] border"
              />
            </div>
          </div>
          <div className="py-3">
            <label htmlFor="txtRUC">RUC:</label>
            <input type="text" name="" id="txtRuc" className="w-[30%] border" />
            <div className="mt-3 px-3">
              <input type="checkbox" name="" id="chEstado" />
              <label htmlFor="chEstado">Estado</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="w-full flex items-center justify-center flex-col py-5">
            <div className="w-[80%] h-[300px] border "></div>
            <div className="flex gap-x-4 py-4">
              <Button title="Buscar" />
              <Button title="Nuevo" />
              <Button title="Deshabilitar" className="bg-red-900" />
              <Button title="Salir" className="bg-red-900" />
            </div>
          </div>
          <div className="w-full h-full border gap-y-3 relative px-4">
            <p className="text absolute top-0 -translate-y-3 bg-white">
              Buscar
            </p>
            <div className="flex w-full">
              <div className="py-5 flex flex-col w-1/2">
                <label htmlFor="dateFecha">Fecha:</label>
                <input type="date" className="border w-[60%]" />
              </div>
              <div className="py-5 flex flex-col w-1/2">
                <label htmlFor="txtNOrden">Nmro de Orden:</label>
                <input
                  type="text"
                  name=""
                  id="txtNOrden"
                  className="border w-[50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
