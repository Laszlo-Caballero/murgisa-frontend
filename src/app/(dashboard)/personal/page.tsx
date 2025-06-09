import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";


export default function PersonalPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3/4 p-4">
            <p className="text-3xl">Personal</p>
            <div className="relative w-full  border border-slate-40 mt-4">
                <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
                Datos del Personal
                </p>
                <div className="p-4 flex flex-col gap-y-2">
                    <div className="flex items-center justify-between">
                        <Input
                        id="txtpersonal"
                        label="Nombre del Personal:"
                        className="flex-row gap-x-2"
                        type="text"
                        />
            
                        <Input
                        id="txtPaterno"
                        label="Apellido Paterno:"
                        className="flex-row gap-x-2"
                        type="text"
                        />
            
                        <Button title="Agregar" />
                    </div>
            
                    <div className="flex items-center justify-between">
                        <Input
                        id="txtMaterno"
                        label="Apellido Materno:"
                        className="flex-row gap-x-2 "
                        type="text"
                        />
            
                        <Input
                        id="txtSueldo"
                        label="Sueldo:"
                        className="flex-row gap-x-2 "
                        type="number"
                        />
                        <Button title="Modificar" />
                    </div>
        
                    <div className="flex items-center gap-x-25">
                        <Select id="txtCargo" label="Cargo:" className="flex-row gap-x-2">
                        <option value="cargo1">Cargo 1</option>
                        <option value="cargo2">Cargo 2</option>
                        <option value="cargo3">Cargo 3</option>
                        </Select>
                        <Select id="txtProfesion" label="Profesion:" className="flex-row gap-x-2">
                        <option value="profesion1">Profesion 1</option>
                        <option value="profesion2">Profesion 2</option>
                        <option value="profesion3">Profesion 3</option>
                        </Select>
                    </div>
        
                    <div className="flex items-center gap-x-25">
                        <Select id="txtDepartamento" label="Departamento:" className="flex-row gap-x-2">
                        <option value="departamento1">Departamento 1</option>
                        <option value="departamento2">Departamento 2</option>
                        <option value="departamento3">Departamento 3</option>
                        </Select>
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
                            <th className="py-2">Id Personal</th>
                            <th>Nombre</th>
                            <th>Sueldo</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center py-2">1</td>
                            <td className="text-center">Juan Perez</td>
                            <td className="text-center">100</td>
                            <td className="text-center">Mantenimiento</td>
                        </tr>
                        <tr>
                            <td className="text-center py-2">2</td>
                            <td className="text-center">Maria Lopez</td>
                            <td className="text-center">200</td>
                            <td className="text-center">Ventas</td>
                        </tr>
                        <tr>
                            <td className="text-center py-2">3</td>
                            <td className="text-center">Carlos Gomez</td>
                            <td className="text-center">300</td>
                            <td className="text-center">Almacen</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
            <div className="relative w-full mt-6 border border-slate-400">
                <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
                Buscar Personal
                </p>
                <div className="p-4 flex items-center gap-x-7 gap-y-2">
                    <Input
                        label="Nro de Indentificacion"
                        id="txtBuscarPersonal"
                        className="flex-row gap-x-2 w-1/2"
                        type="text"
                    />
            
                    <Button title="Buscar" className="w-1/4" />
                </div>
            </div>
        </div>
);
}