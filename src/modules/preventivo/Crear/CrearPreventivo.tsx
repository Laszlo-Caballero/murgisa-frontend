"use client";
import { LuBuilding2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { PiIdentificationCardLight } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuBarcode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { GrHostMaintenance, GrUserWorker } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDateRange, MdLowPriority } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import {Response } from "@/interfaces/responsefinal.interface";
import axios from "axios";
import { useForm } from "react-hook-form";
import Load from "@/components/share/load/Load";
import { useQuery } from "@/hooks/useQuery";
import { env } from "@/config/env";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { z } from "zod";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";
import {
  LuShield,
  LuCircleCheck,
  LuCirclePlay,
  LuTriangleAlert,
  LuCirclePlus,
} from "react-icons/lu";

import { Recurso, Personal, Horario, MantenimientoPreventivo } from "@/interfaces/responsefinal.interface";
import { MantenimientoPreventivoSchema } from "@/schemas/MantenimientoPreventivo.schema";
import InputDate from "@/components/ui/input-date/InputDate";
import { CiCirclePlus } from "react-icons/ci";
import Select from "@/components/ui/select/Select";

export default function CrearPreventivo({ onClose }: ModalProps) {
    const { data, isLoading: loadingMantenimientoPreventivo } = useQuery({
      queryFn: async () => {
        const response = await axios.get<Response<Horario[]>>(
          `${env.url_api}/utils/horarios`
          
        );
        return response.data;
      },
    });
    const {
      register,
      setValue,
      watch,
      formState: { errors },
      handleSubmit,
    } = useForm({
      resolver: zodResolver(MantenimientoPreventivoSchema),
    });
    const { refresh } = useTableContext<MantenimientoPreventivo>();
  
    const { mutate, isLoading } = useMutation<
      z.infer<typeof MantenimientoPreventivoSchema>,
      Response<MantenimientoPreventivo[]>
    >({
      mutationFn: async (data, url, token) => {
        const response = await axios.post(
          `${url}/mantenimiento-preventivo`,
          {
            fechaMantenimiento: data.fechaMantenimiento,
            prioridad: data.Prioridad,
            horarioId: parseInt(data.horario.value),
            personalId: parseInt(data.personal.value),
            recursoId: parseInt(data.recurso.value),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        return response.data;
      },
      onSuccess: (data) => {
        toast.success("Mantenimiento preventivo registrado exitosamente");
        refresh(data.data);
        onClose?.();
      },
      onError: () => {
        toast.error(
          "Error al registrar el mantenimiento preventivo. Por favor, intenta nuevamente."
        );
      },
    });
  
  return (
     <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
        {(isLoading || loadingMantenimientoPreventivo) && <Load />}
     <div className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
               <header className="flex items-center gap-x-3">
                 <GrHostMaintenance size={40} className="text-orange-500" />
                 <div className="flex flex-col">
                   <p className="text-xl font-semibold dark:text-white">
                     Agregar una planificación de mantenimiento
                   </p>
                   <p className="text-sm text-gray-500 dark:text-gray-300">
                     Completa los datos para registrar una nueva planificación en
                     el sistema
                   </p>
                 </div>
               </header>
   
            
               <div className="grid grid-cols-1 gap-4 mt-4">
                 <div className="flex flex-col gap-y-1">             
                   <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                        <InputDate
                          label="Fecha de Mantenimiento"
                          icon={<CiCirclePlus />}
                          placeholder="Selecciona una fecha"
                          error={errors.fechaMantenimiento?.message}
                          onChange={(date) => {
                              setValue("fechaMantenimiento", date);
                          }}
                          value={watch("fechaMantenimiento")}
                          />
                     </div>
                  </div>
                 <div className="flex flex-col gap-y-1">
                   <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     Prioridad
                   </label>
                   <div className="flex items-center gap-x-2 border rounded-md px-3 py-2 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600">
                     <MdLowPriority className="text-gray-500 dark:text-gray-300" />
                     <select className="w-full bg-transparent outline-none text-sm dark:bg-gray-700 dark:text-white">
                       <option>Selecciona la prioridad</option>
                       <option value="1">Alta</option>
                       <option value="2">Media</option>
                       <option value="3">Baja</option>
                     </select>
                   </div>
                 </div>
                 <div className="flex flex-col gap-y-1">
                     <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                     <Select
                              label="Recurso"
                              icon={<CiCirclePlus />}
                              placeholder="Selecciona un Recurso"
                              
                      />
                   </div>
                 </div>
  
                 <div className="flex flex-col gap-y-1">
                   <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                     <Select
                              label="Personal"
                              icon={<CiCirclePlus />}
                              placeholder="Selecciona un Personal"
                              
                      />
                   </div>
                 </div>
   
                 <div className="flex flex-col gap-y-1">
                    <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                      <Select
                              label="Horario"
                              icon={<CiCirclePlus />}
                              placeholder="Selecciona un Horario"
                              options={data?.data?.map((horario) => {
                                return {
                                  label:`${horario.horaInicio.split("T")[1].substring(0, 5)} - ${horario.horaFin.split("T")[1].substring(0, 5)}`,
                                  value: horario.idhorario.toString(),
                                };
                              })}
                              onChange={(value) => {
                                setValue("horario", {
                                  value: value.value,
                                  label: value.label?.toString() || "",
                                });
                              }}
                              value={watch("horario")}
                              error={errors.horario?.message}
                            
                      />
                   </div>
                 </div>
               </div>
   
                <Button className="flex items-center gap-x-3 mt-4 bg-orange-500 text-white py-3 font-semibold hover:bg-orange-400">
                 <FiPlus size={15} className="mr-2" />
                 Registrar Planificación
               </Button>
             </div>
              </form>
  );
}
