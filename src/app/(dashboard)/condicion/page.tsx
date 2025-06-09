import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
export default function Condicion() {
  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="flex flex-col px-4">
          <p className="text-2xl">Condicion</p>
          <div className="py-3">
            <Input id="txtIdCondicion" label="IdCondcion: " />
            <Input id="Condicion" label="Condicion: " />
            <div className="mt-3 px-3">
              <input type="checkbox" name="" id="chEstado" />
              <label htmlFor="chEstado">Estado</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-y-3">
            <Button title="Agregar" />
            <Button title="Editar" />
            <Button title="Deshabilitar" className="bg-amber-900" />
          </div>
        </div>
      </div>
      <div className="border w-[600px] h-[300px]"></div>
    </div>
  );
}

