import Button from "@/components/button/Button";
import Select from "@/components/select/Select";
export default function Planificacion() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl">Planificacion de Mantenimiento</p>
      <div className="w-full flex gap-2">
        <div className="w-[30%] flex flex-col gap-y-3 border relative px-4">
          <p className="text absolute top-0 -translate-y-3 bg-white">
            Planificacion
          </p>
          <div className="flex flex-col gap-y-3 py-3">
            <label htmlFor="txtNroPlanificacion">Nro de Planificacion:</label>
            <input
              type="text"
              id="txtNroPlanificacion"
              className="w-[70%] border"
            />
            <label htmlFor="txtFechaMantenimiento">
              Fecha de Mantenimiento:
            </label>
            <input type="date" className="w-[40%] border" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="txtMantenimiento">T. Mantenimiento:</label>
              <select name="" id="txtMantenimiento" className="w-[90%]">
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
              </select>
              <label htmlFor="txtPrioridad">Prioridad:</label>
              <select name="" id="txtPrioridad" className="w-[90%]">
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
              </select>
            </div>
            <div className="flex flex-col px-4">
              <label htmlFor="txtTecnico">Tecnico:</label>
              <select name="" id="txTecnico" className="w-[100%]">
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
              </select>
              <label htmlFor="txtRecurso">Recurso:</label>
              <select name="" id="txtRecurso" className="w-[100%]">
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
              </select>
            </div>
          </div>
          <div>
            <Select id="txtHorario" label="Horario: ">
              <option value="">Opcion 1</option>
              <option value="">Opcion 2</option>
            </Select>
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
              <Button title="Nuevo" />
              <Button title="Editar" />
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
                <label htmlFor="txtNPlanificacion">Nro de Planificacion:</label>
                <input
                  type="text"
                  name=""
                  id="txtNPlanificacion"
                  className="border w-[50%]"
                />
                <div className="py-5">
                  <Button title="Consular" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
