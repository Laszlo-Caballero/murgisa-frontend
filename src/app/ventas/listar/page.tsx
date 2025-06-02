import Button from "@/components/button/Button";

export default function ListarVentas() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl">Ventas</p>
      <div className="flex flex-col w-full py-4 items-center justify-center">
        <div className="flex items-center">
          <label htmlFor="txtCliente">Cliente:</label>
          <input type="text" id="txtCliente" className="border h-[30px] ml-4" />

          <div className="px-8 flex gap-x-2">
            <Button title="Buscar" />
            <Button title="Ver todos" />
          </div>

          <label htmlFor="txtIdVenta">Id Venta</label>
          <input type="text" id="txtIdVenta" className="border h-[30px] ml-4" />
        </div>
      </div>
      <div className="flex flex-col w-full p-4">
        <div className="max-h-[100px] w-full overflow-y-scroll">
          <table className="bg-slate-300 w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="py-2">Id Venta</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">2</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center">Juan Perez</td>
                <td className="text-center">01/01/2023</td>
                <td className="text-center">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl">Materiales</p>
          <div className="max-h-[100px] w-full overflow-y-scroll">
            <table className="bg-slate-300 w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-2">Id Venta</th>
                  <th>Material</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Material 1</td>
                  <td className="text-center">10</td>
                  <td className="text-center">$50.00</td>
                </tr>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Material 2</td>
                  <td className="text-center">5</td>
                  <td className="text-center">$25.00</td>
                </tr>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Material 3</td>
                  <td className="text-center">2</td>
                  <td className="text-center">$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl">Empleados</p>
          <div className="max-h-[100px] w-full overflow-y-scroll">
            <table className="bg-slate-300 w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-2">Id Empleado</th>
                  <th>Nombre</th>
                  <th>Posición</th>
                  <th>Salario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Juan Perez</td>
                  <td className="text-center">Vendedor</td>
                  <td className="text-center">$1000.00</td>
                </tr>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Material 2</td>
                  <td className="text-center">5</td>
                  <td className="text-center">$25.00</td>
                </tr>
                <tr>
                  <td className="text-center py-2">1</td>
                  <td className="text-center">Material 3</td>
                  <td className="text-center">2</td>
                  <td className="text-center">$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full py-2">
        <Button title="Agregar Venta" className="mr-4" />
      </div>
    </div>
  );
}
