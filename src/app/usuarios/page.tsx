import Input from "@/components/input/Input";

export default function Usuarios() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <p className="text-3xl">Cliente</p>
      <div className="relative w-full border border-slate-40 mt-4">
        <p className="bg-white absolute top-0 -translate-y-3 translate-x-2 px-2">
          Datos del Cliente
        </p>
        <div className="py-4">
          <Input
            id="txtCliente"
            label="Nombre del Cliente:"
            className="flex-row gap-x-2"
            type="text"
          />

          <Input
            id="txtRazonSocial"
            label="Razon Social:"
            className="flex-row gap-x-2 "
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
