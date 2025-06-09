import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="justify-center py-3">
        <div className="flex ">
          <div className="w-170 h-80 bg-gray-500"></div>
          <div className="px-3">
            <table className="bg-slate-300">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-center py-2">ID</th>
                  <th className="text-center px-5">Mantenimiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Mantenimiento 1</td>
                </tr>
                <tr>
                  <td className="text-center py-2">2</td>
                  <td className="text-center">Mantenimiento 2</td>
                </tr>
                <tr>
                  <td className="text-center py-2">3</td>
                  <td className="text-center">Mantenimiento 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <Input
              label="PedidoId"
              id="txtPedido ID"
              className="flex-row"
            ></Input>
            <Select
              label="Maquinaria"
              id="slMaquinaria"
              className="flex-row"
            ></Select>
          </div>
        </div>
      </div>
    </div>
  );
}
