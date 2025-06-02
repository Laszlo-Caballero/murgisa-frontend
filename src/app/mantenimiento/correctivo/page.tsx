import React from "react";

export default function MantenimientoCorrectivo() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl">Mantenimiento Correctivo</p>
      <div className="w-full flex">
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
        <div className="w-full border flex items-center justify-center">
          <div className="w-[80%] h-[80%] border "></div>
        </div>
      </div>
    </div>
  );
}
