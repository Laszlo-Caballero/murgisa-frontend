import Button from "@/components/button/Button";
export default function MantenimientoPreventivo() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl">Mantenimiento Preventivo</p>
      <div className="w-full flex gap-2">
        <div className="w-[30%] flex flex-col gap-y-3 border relative px-4">
          <p className="text absolute top-0 -translate-y-3 bg-white">
            Correctivo
          </p>
          <div className="flex flex-col gap-y-3 py-3">
            <label htmlFor="txtNro">Nro:</label>
            <input type="text" id="txtNro" className="w-[70%] border" />
            <label htmlFor="txtIdPlanificacion">IdPlanificacion:</label>
            <select name="" id="txtIdPlanificacion" className="w-[40%] border">
              <option value="">Opcion 1</option>
              <option value="">Opcion 2</option>
            </select>
            <label htmlFor="txtFechaMP">Fecha de MP:</label>
            <input type="date" className="w-[40%] border" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="txtEjecucion">Resultado Ejecucion:</label>
              <input
                type="text"
                name=""
                id="txtEjecucion"
                className="w-[90%] border"
              />
              <label htmlFor="txtEspecial">Requerimiento Especial:</label>
              <input
                type="text"
                name=""
                id="txtEspecial"
                className="w-[90%] border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="txtComentarios">Comentarios:</label>
              <input
                type="text"
                name=""
                id="txtComentarios"
                className="w-[70%] border"
              />
              <label htmlFor="txtDuracion">Duracion:</label>
              <input
                type="text"
                name=""
                id="txtDuracion"
                className="w-[70%] border"
              />
            </div>
          </div>
          <div className="py-3">
            <div className="flex gap-x-4 py-4">
              <Button title="Registrar" />
              <Button title="Modificar" />
              <Button title="Cancelar" className="bg-red-900" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="w-full flex items-center justify-center flex-col py-5">
            <div className="w-[80%] h-[300px] border "></div>
            <div className="flex gap-x-4 py-4">
              <Button title="Buscar" />
              <Button title="Nuevo" />
              <Button title="Deshabilitar" className="bg-red-900" />
              <Button title="Salir" className="bg-red-900" />
            </div>
          </div>
          <div className="w-full h-full border gap-y-3 relative px-4">
            <p className="text absolute top-0 -translate-y-3 bg-white">
              Buscar
            </p>
            <div className="flex w-full">
              <div className="py-5 flex flex-col w-1/2">
                <label htmlFor="dateFecha">Fecha:</label>
                <input type="date" className="border w-[60%]" />
              </div>
              <div className="py-5 flex flex-col w-1/2">
                <label htmlFor="txtID">ID:</label>
                <input
                  type="text"
                  name=""
                  id="txtID"
                  className="border w-[50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
