import Button from "@/components/button/Button";
import React from "react";

export default function VentasPagina() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <p className="text-3xl">Realiza Venta</p>
      <div className="w-full flex gap-x-4 mt-4">
        <div className="w-full flex flex-col justify-center items-center border border-slate-500">
          <div className="flex w-[500px] flex-wrap gap-x-5 gap-y-2">
            <label htmlFor="txtVenta">Venta:</label>
            <input type="text" id="txtVenta" className="border h-[30px]" />
            <div className="flex flex-col">
              <label htmlFor="fechaRegistro">
                Fecha de Registro de la venta:
              </label>
              <input type="date" id="fechaRegistro" />
            </div>

            <label htmlFor="selectProducto">Tipo de Servicio:</label>
            <select id="selectProducto">
              <option value="1">Producto 1</option>
              <option value="2">Producto 2</option>
              <option value="3">Producto 3</option>
            </select>

            <input type="checkbox" id="chkActivo" />
            <label htmlFor="chkActivo">Activo</label>
          </div>

          <table>
            <thead>
              <tr>
                <th className="p-4">Nombre del servicio</th>
                <th className="px-4">Fecha de Inicio</th>
                <th className="px-4">Fecha fin</th>
                <th className="px-4">Precio</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center">Construccion</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">31/12/2023</td>
                <td className="text-center">$1000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center border border-slate-500">
          <p className="px-4">Cliente</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4">
            <div>
              <label htmlFor="idCliente">ID</label>
              <input type="text" id="idCliente" className="border h-[30px]" />
            </div>
            <div>
              <label htmlFor="nombreCliente">Nombre</label>
              <input
                type="text"
                id="nombreCliente"
                className="border h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="buscarRuc">Buscar por RUC</label>
              <input type="text" id="buscarRuc" className="border h-[30px]" />
            </div>
            <button className="py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl">
              buscar
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-x-4 mt-4">
        <div className="flex flex-col w-full h-[300px] border border-slate-500">
          <p className="px-4">Tipo Servicio</p>
        </div>
        <div className="flex flex-col w-full border border-slate-500">
          <p className="px-4 py-2">Personal</p>
          <div className="flex flex-col w-full px-4">
            <label htmlFor="idPersonal">ID</label>
            <input
              type="text"
              id="idPersonal"
              className="border h-[30px] px-4"
            />
          </div>

          <div className="flex flex-col w-full  px-4">
            <label htmlFor="personal" className="">
              Seleccionar Personal
            </label>
            <select id="personal" className="border h-[30px]">
              <option value="1">Personal 1</option>
              <option value="2">Personal 2</option>
              <option value="3">Personal 3</option>
            </select>
          </div>

          <div className="flex w-full px-4 py-2 gap-x-2">
            <Button title="Agregar Personal" />
            <Button title="Eliminar Personal" className="bg-red-400" />
          </div>

          <table>
            <thead>
              <tr>
                <th>Id Personal</th>
                <th>Nombre</th>
                <th>Fecha Inicio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex w-full items-center gap-x-4 mt-4">
        <label htmlFor="precio">Precio</label>
        <input
          type="text"
          id="precio"
          className="border h-[30px] px-4 w-full max-w-[200px]"
        />

        <Button title="Agregar Venta" />
        <Button title="Eliminar Venta" />

        <button className="py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl">
          Confirmar Venta
        </button>
      </div>
    </div>
  );
}
