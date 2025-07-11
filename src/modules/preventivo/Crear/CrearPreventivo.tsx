"use client";
import { LuBuilding2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { PiIdentificationCardLight, PiWrenchBold } from "react-icons/pi";
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
import { TipoMantenimiento } from "@/interfaces/response.interface";
import { tipoMantenimientoData } from "@/data/tipomantenimiento";
import { error } from "console";

export default function CrearPreventivo({ onClose }: ModalProps) {
    const { data, isLoading: loadingMantenimientoPreventivo } = useQuery({
      queryFn: async () => {
        const response = await axios.get<Response<Horario[]>>(
          `${env.url_api}/utils/horarios`
          
        );
        return response.data;
      },
    });
    const { data: recurso, isLoading: isLoadingRecurso } = useQuery<Response<Recurso[]>>({
     queryFn: async (url, token) => {
    const res = await axios.get<Response<Recurso[]>>(`${url}/recurso`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
   },
   });
   const { data: personal, isLoading: isLoadingPersonal } = useQuery<Response<Personal[]>>({
     queryFn: async (url, token) => {
    const res = await axios.get<Response<Personal[]>>(`${url}/personal`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
   },
   });
 
  const { data: tipos, isLoading: isLoadingTipos } = useQuery<Response<TipoMantenimiento[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<TipoMantenimiento[]>>(
        `${url}/tipo-mantenimiento`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
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
    const getPrioridadLabel = (value: string | undefined) => {
    switch (value) {
    case "1":
      return "Alta";
    case "2":
      return "Media";
    case "3":
      return "Baja";
    default:
      return "";
  }
};

    const { mutate, isLoading } = useMutation<
      z.infer<typeof MantenimientoPreventivoSchema>,
      Response<MantenimientoPreventivo[]>
    >({
      mutationFn: async (data, url, token) => {
        console.log("Datos enviados:", data); 
        const response = await axios.post(
          `${url}/mantenimiento-preventivo`,
          {
            tipoIds: [parseInt(data.tipo.value)], 
            fechaMantenimiento: data.fechaMantenimiento,
            prioridad: data.Prioridad,
            recursoId: parseInt(data.recurso.value),
            personalId: parseInt(data.personal.value),
            horarioId: parseInt(data.horario.value),
            
            
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
                   <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                   <Select
                      label="Prioridad"
                      icon={<MdLowPriority />}
                      placeholder="Selecciona una Prioridad"
                      options={[
                        { label: "Alta", value: "1" },
                        { label: "Media", value: "2" },
                        { label: "Baja", value: "3" },
                      ]}
                      onChange={(value) => {
                        setValue("Prioridad", value.value);
                      }}
                      value={{ label: getPrioridadLabel(watch("Prioridad")), value: watch("Prioridad") }}
                      error={errors.Prioridad?.message}
                    />

                   </div>
                 </div>
                 <div className="flex flex-col gap-y-1">
                     <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                     <Select
                              label="Recurso"
                              icon={<CiCirclePlus />}
                              placeholder="Selecciona un Recurso"
                              options={recurso?.data?.map((recurso) => {
                                return {
                                  label: recurso.nombre,
                                  value: recurso.idRecurso.toString(),
                                };
                              })}
                              onChange={(value) => {
                                setValue("recurso", {
                                  value: value.value,
                                  label: value.label?.toString() || "",
                                });
                              }}
                              value={watch("recurso")}
                              error={errors.recurso?.message}
                      />
                   </div>
                 </div>
  
                 <div className="flex flex-col gap-y-1">
                   <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                     <Select
                              label="Personal"
                              icon={<CiCirclePlus />}
                              placeholder="Selecciona un Personal"
                               options={personal?.data?.map((personal) => {
                                return {
                                  label: personal.nombre,
                                  value: personal.idPersonal.toString(),
                                };
                              })}
                              onChange={(value) => {
                                setValue("personal", {
                                  value: value.value,
                                  label: value.label?.toString() || "",
                                });
                              }}
                              value={watch("personal")}
                              error={errors.personal?.message}
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
                    <div className="flex flex-col gap-y-1">
                    <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
                      <Select
                                label="Tipo de Mantenimiento"
                                icon={<PiWrenchBold />}
                                placeholder="Tipo de Mantenimiento Correctivo"
                                options={tipos?.data.map((tipo) => {
                                  return {
                                    label: tipo.nombre,
                                    value: tipo.idTipoMantenimiento.toString(),
                                  };
                                })}
                                onChange={(value) => {
                                  setValue("tipo", {
                                    value: value.value,
                                    label: value.label?.toString() || "",
                                  });
                                }}
                                value={watch("tipo")}
                                error={errors.tipo?.message}
                              ></Select>
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
