"use client";
import { LuShield } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LuCircleCheck } from "react-icons/lu";
import { LuCirclePlay } from "react-icons/lu";
import { LuTriangleAlert } from "react-icons/lu";
import Modal from "@/components/ui/modal/Modal";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import { PlanificacionPreventivo } from "@/interfaces/response.interface";
import ListarPreventivos from "@/modules/preventivo/listar/listar";
import{preventivoData} from "@/data/preventivo";
import ListarCalendario from "@/modules/preventivo/calendario/calendario";
import { useState } from "react";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { LuCirclePlus } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { MdLowPriority } from "react-icons/md";
export default function MantenimientoPreventivoPage() {
  const [showModal, setShowModal] = useState(false);
  const preventivo: PlanificacionPreventivo[] = preventivoData;
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-50">
        {showModal && (
                    <Modal
                      onClose={() => {
                        setShowModal(false);
                      }}
                    >
                      <div className="w-[800px] bg-white p-6 rounded-lg shadow-lg">
                        <header className="flex items-center gap-x-3">
                          <GrHostMaintenance  size={40} className=" text-orange-500" />
                            <div className="flex flex-col">
                              <p className="text-xl font-semibold">Agregar una planificación de mantenimiento</p>
                              <p className="text-sm text-gray-500">
                                  Completa los datos para registrar una nueva planificación en el
                                  sistema
                              </p>
                            </div>
                          </header>
                              <div className="grid grid-cols-1 gap-4">
                                  {/* Fecha */}
                                  <Input
                                    label="Fecha de mantenimiento"
                                    type="date"
                                    placeholder=""
                                    icon={<MdDateRange />}
                                  />
                                  {/* Prioridad */}
                                  <Select
                                    label="Prioridad"
                                    icon={<MdLowPriority/>}
                                    placeholder="Selecciona la prioridad"
                                    options={[
                                    { value: "1", label: "Alta" },
                                    { value: "2", label: "Media" },
                                    { value: "3", label: "Baja" }
                                    ]}>
                                    </Select>
                                   {/* Recurso */}
                                  <Select
                                    label="Recurso"
                                    icon={<LuCirclePlus />}
                                    placeholder="Selecciona un recurso"
                                    options={[
                                    { value: "1", label: "Grúa" },
                                    { value: "2", label: "Excavadora" },
                                    { value: "3", label: "Generador" }
                                    ]}>
                                  </Select>
                                  {/* Personal */}
                                    <Select
                                      label="Personal"
                                      icon={< GrUserWorker  />}
                                      placeholder="Selecciona el responsable del mantenimiento"
                                      options={[
                                    { value: "1", label: "Técnico 1" },
                                    { value: "2", label: "Técnico 2" },
                                    { value: "3", label: "Técnico 3" }
                                    ]}>
                                  </Select>
                                   {/* Horario */}
                                    <Select
                                      label="Horario"
                                      icon={<AiFillSchedule />}
                                      placeholder="Selecciona el horario"
                                      options={[
                                    { value: "1", label: "8:00 - 10:00" },
                                    { value: "2", label: "10:00 - 12:00" },
                                    { value: "3", label: "14:00 - 16:00" }
                                    ]}>
                                  </Select>
                              </div>
                              <div>
                                <Button className="flex items-center gap-x-3 mt-4  bg-orange-500 text-white py-3 font-semibold hover:bg-blue-500">
                                  <FiPlus size={15} className="mr-2" />
                                  Registrar Planificación 
                                </Button>
                              </div>
                            </div>
                    </Modal>
                  )}
          <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
              <span className="bg-orange-500 p-2 rounded-xl max-w-max mb-2 lg:p-3">
                <LuShield className="text-white size-8 lg:size-10" />
              </span>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Mantenimiento Preventivo</p>
                <p className="text-sm mt-1">
                  Gestiona y monitorea los mantenimientos preventivos programados
                </p>
            </div>
            <Button className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-orange-500 hover:bg-orange-400 mb-2"
              onClick={() => {
            setShowModal(true);
          }}
          >
              <FiPlus size={15} />
              Planificar Mantenimiento
            </Button>
          </header>
          <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Total"
              icon={<LuShield size={28} className="text-white" />}
              description="10"
              extra="Mantenimientos planificados en el sistema"
              className = {{ container: "bg-blue-100 shadow-lg", 
                icon: "bg-blue-600 rounded-full p-3 shadow-xl",
                text:{
                  title:"text-blue-700" ,
                  description:"text-blue-900 text-3xl",
                  extra: "text-blue-800 text-xs"
              }}}
            />
            <Card
              title="Completados"
              icon={<LuCircleCheck size={28} className="text-white" />}
              description="6"
              extra="Correctamente por los responsables."
              className = {{ 
                container: "bg-green-100 shadow-lg", 
                icon: "bg-green-600 rounded-full p-3 shadow-xl",
                text:{title:"text-green-700",
                description:"text-green-800 text-3xl", 
                extra: "text-green-800 text-xs"}}}
            />
            <Card
              title="En Progreso"
              icon={<LuCirclePlay size={28} className="text-white" />}
              description="3"
              extra="Están siendo trabajadas actualmente."
              className = {{ 
                container: "bg-orange-100 shadow-lg", 
                icon: "bg-orange-600 rounded-full p-3 shadow-xl",
                text:{title:"text-orange-700" ,
                description:"text-orange-900 text-3xl",
                extra: "text-orange-800 text-xs" }}}
            />         
            <Card
              title="Atrasados"
              icon={<LuTriangleAlert size={28} className="text-white" />}
              description="1"
              extra=" No se completaron en la fecha estimada"
              className = {{ 
                container: "bg-red-100 shadow-lg",
                icon: "bg-red-600 rounded-full p-3 shadow-xl",
                text:{title:"text-red-700" ,
                description:"text-red-900 text-3xl",
                extra: "text-red-900 text-xs"}}}
            /> 
          </div>
          <Tabs
            headers={["Lista de Mantenimientos", "Vista Calendario"]}
            className="mt-6"
          >
          <ListarPreventivos data={preventivo} />
          <ListarCalendario data={preventivo} />
          </Tabs> 
    </div>
  );
}
