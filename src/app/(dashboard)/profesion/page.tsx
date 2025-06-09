import Button from "@/components/button/Button";
import Select from "@/components/select/Select";
import Input from "@/components/input/Input";

export default function page() {
  return (
    <div className="w-full">
      <div className=" flex">
        <div className=" flex flex-col">
          <Input
            label="Profesion ID"
            id="txtProfesion"
            className="flex-row py-3"
          ></Input>
          <Input label="Titulo" id="txtTitulo" className="flex-row"></Input>
        </div>
        <div className="px-3 flex flex-col py-3">
          <Input label="Criterio" id="txtCriterio" className="flex-row"></Input>
          <Input
            label="Estado"
            id="cbEstado"
            className="flex-row py-3"
            type="checkbox"
          ></Input>
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex">
          <div className="px-2 w-100 h-100 bg-gray-500"></div>
          <div className="py-3 px-3 gap-y-5  flex flex-col">
            <Button title="Buscar" className="py-5"></Button>
            <Button title="Agregar" className="py-5"></Button>
            <Button title="Editar" className="py-5"></Button>
            <Button title="Deshabilitar" className="bg-amber-900 py-5"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
