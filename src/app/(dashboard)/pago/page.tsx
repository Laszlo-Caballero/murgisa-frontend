import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";


export default function PagoPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
            <p className="text-3xl">Pago</p>
            <div className="relative w-full  border border-slate-40 mt-4">
                <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
                Datos del Cliente
                </p>
                <div className="p-4 flex flex-col gap-y-2">
                    <div className="flex items-center justify-between">
                        <Input
                        id="txtDni"
                        label="Dni del Cliente:"
                        className="flex-row gap-x-2 "
                        type="text"
                        />

                        <Input
                        id="txtCliente"
                        label="Nombre:"
                        className="flex-row gap-x-2"
                        type="text"
                        />
            
                        <Button title="Buscar" />
                    </div>
            
                    <div className="flex items-center justify-between">

                        <Input
                        id="txtCorreo"
                        label="Correo:"
                        className="flex-row gap-x-2"
                        type="email"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-full  border border-slate-40 mt-4">
                <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
                Datos del Pago
                </p>
                <div className="p-4 flex flex-col gap-y-2">
                    <div className="flex items-center justify-between">
                        <Select id="txtVenta" label="Venta:" className="flex-row gap-x-2">
                            <option value="venta1">Venta 1</option>
                            <option value="venta2">Venta 2</option>
                            <option value="venta3">Venta 3</option>
                        </Select>
            
                        <Select id="txtFormPago" label="Forma de Pago:" className="flex-row gap-x-2">
                        <option value="forma1">Forma 1</option>
                        <option value="forma2">Forma 2</option>
                        <option value="forma3">Forma 3</option>
                        </Select>
            
                        <Button title="Agregar" />
                    </div>
            
                    <div className="flex items-center justify-between">
                        <Input
                        id="txtTotal"
                        label="Total:"
                        className="flex-row gap-x-2 "
                        type="number"
                        />
            
                        <label htmlFor="txtFechaPago">
                        Fecha de Pago:
                        </label>
                        <input type="date" className="w-[20%] border" />

                        <Button title="Anular" />
                    </div>
                </div>
            </div>
        
            <div className="max-h-[500px] w-full overflow-y-scroll mt-6">
                <table className="bg-slate-300 w-full">
                <thead className="bg-slate-50">
                    <tr>
                    <th className="py-2">Id Pago</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center py-2">1</td>
                    <td className="text-center">Juan Perez</td>
                    <td className="text-center">2000</td>
                    <td className="text-center">11/04/2025</td>
                    </tr>
                    <tr>
                    <td className="text-center py-2">2</td>
                    <td className="text-center">Maria Lopez</td>
                    <td className="text-center">650</td>
                    <td className="text-center">08/02/2025</td>
                    </tr>
                    <tr>
                    <td className="text-center py-2">3</td>
                    <td className="text-center">Carlos Gomez</td>
                    <td className="text-center">380</td>
                    <td className="text-center">26/01/2025</td>
                    </tr>
                </tbody>
                </table>
            </div>
        
            <div className="relative w-full mt-6 border border-slate-400">
                <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
                Buscar Pago
                </p>
                <div className="p-4 flex items-center gap-x-7 gap-y-2">
                <Input
                    label="Nro de Indentificacion"
                    id="txtBuscarPago"
                    className="flex-row gap-x-2 w-1/2"
                    type="text"
                />
        
                <Button title="Buscar" className="w-1/4" />
                </div>
            </div>
            </div>
);
}
