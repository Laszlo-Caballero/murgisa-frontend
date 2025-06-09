import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

export default function Cargo() {
  return (
    <div className="w-full flex flex-col items-center p-6">
      <p className="text-3xl font-semibold mb-6">Cargo</p>
      <div className="w-full max-w-5xl flex gap-10 mb-6">
        <div className="flex flex-col gap-4 w-1/3">
          <Input id="txtCargoId" label="CARGOID:" type="text" />
          <Input id="txtNombre" label="NOMBRE:" type="text" />
          <Input id="txtCriterio" label="CRITERIO:" type="text" />
        </div>
        <div className="flex flex-col gap-4 w-2/3">
          <Input
            id="txtDescripcion"
            label="DESCRIPCIÓN:"
            type="text"
            className="w-full"
          />
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" id="chkEstado" />
            <label htmlFor="chkEstado" className="text-sm">ESTADO</label>
          </div>
          <Button title="Buscar" />
        </div>
      </div>
      <div className="w-full max-w-5xl flex gap-6">
        <div className="flex-1 bg-gray-300 h-[300px] rounded border border-slate-400" />
        <div className="flex flex-col gap-3">
          <Button title="Agregar" />
          <Button title="Editar" />
          <Button title="Deshabilitar" />
        </div>
      </div>
    </div>
  );
}

