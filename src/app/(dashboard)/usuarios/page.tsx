import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";

export default function Usuarios() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
      <p className="text-3xl">Cliente</p>
      <div className="relative w-full  border border-slate-40 mt-4">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Datos del Cliente
        </p>
        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between">
            <Input
              id="txtCliente"
              label="Nombre del Cliente:"
              className="flex-row gap-x-2"
              type="text"
            />

            <Input
              id="txtDni"
              label="DNI:"
              className="flex-row gap-x-2"
              type="text"
            />

            <Button title="Agregar" />
          </div>

          <div className="flex items-center justify-between">
            <Input
              id="txtRazonSocial"
              label="Razon Social:"
              className="flex-row gap-x-2 "
              type="text"
            />

            <Input
              id="txtCorreo"
              label="Correo:"
              className="flex-row gap-x-2 "
              type="text"
            />
            <Button title="Modificar" />
          </div>

          <div className="flex items-center gap-x-44">
            <Select id="txtCiudad" label="Ciudad:" className="flex-row gap-x-2">
              <option value="ciudad1">Ciudad 1</option>
              <option value="ciudad2">Ciudad 2</option>
              <option value="ciudad3">Ciudad 3</option>
            </Select>
            <Input
              id="txtTelefono"
              label="Telefono:"
              className="flex-row gap-x-2"
              type="text"
            />
          </div>

          <div className="flex items-center gap-x-44">
            <Input
              id="txtDireccion"
              label="Direccion:"
              className="flex-row gap-x-2"
              type="text"
            />
            <Input
              id="chkEstado"
              label="Estado"
              className="flex-row-reverse gap-x-2 max-w-max"
              type="checkbox"
            />
          </div>
        </div>
      </div>

      <div className="max-h-[500px] w-full overflow-y-scroll mt-6">
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
              <td className="text-center py-2">2</td>
              <td className="text-center">Maria Lopez</td>
              <td className="text-center">02/01/2023</td>
              <td className="text-center">$150.00</td>
            </tr>
            <tr>
              <td className="text-center py-2">3</td>
              <td className="text-center">Carlos Gomez</td>
              <td className="text-center">03/01/2023</td>
              <td className="text-center">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="relative w-full mt-6 border border-slate-400">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Buscar Cliente
        </p>
        <div className="p-4 flex items-center gap-x-7 gap-y-2">
          <Input
            label="Nro de Indentificacion"
            id="txtBuscarCliente"
            className="flex-row gap-x-2 w-1/2"
            type="text"
          />

          <Button title="Buscar" className="w-1/4" />
        </div>
      </div>
    </div>
  );
}
