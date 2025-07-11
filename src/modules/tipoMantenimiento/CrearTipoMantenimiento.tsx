"use client";


import Input from "@/components/ui/input/Input";
import React from "react";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { LuSettings, LuClock4, LuPencilLine } from "react-icons/lu";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Response } from "@/interfaces/responsefinal.interface";
import { TipoMantenimientoSchema } from "@/schemas/TipoMantenimiento.schema";
import { TipoMantenimiento } from "@/interfaces/responsefinal.interface";
import { z } from "zod";



export default function CrearTipoMantenimiento({ onClose }: ModalProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(TipoMantenimientoSchema),
  });

  const { refresh } = useTableContext<TipoMantenimiento>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof TipoMantenimientoSchema>,
    Response<TipoMantenimiento[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/tipo-mantenimiento`,
        {
          nombre: data.nombre,
          descripcion: data.descripcion,
          duracion: data.duracion,

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
      toast.success("Tipo de Mantenimiento registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el Tipo de Mantenimiento. Por favor, intenta nuevamente."
      );
    },
  });
  return (
    <form 
    onSubmit={handleSubmit(mutate)}
    className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-800 p-8 flex flex-col gap-y-4">
      <header className="flex items-center gap-x-3">
        <LuSettings size={40} className="text-orange-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-black dark:text-white">
            Agregar Nuevo Mantenimiento
          </p>
          <p className="text-sm text-gray-500 dark:text-white">
            Configura un nuevo tipo de mantenimiento para el sistema
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-y-4">
        <Input
          label="Nombre del Mantenimiento"
          icon={<LuSettings />}
          placeholder="Ej: Mantenimiento Electrónico"
          className="dark:text-white dark:placeholder-white"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe el tipo de mantenimiento, procedimiento, objetivos..."
          className="dark:text-white dark:placeholder-white"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
        <Input
          label="Duración"
          icon={<LuClock4 />}
          placeholder="Ej: 4 horas"
          className="dark:text-white dark:placeholder-white"
          {...register("duracion")}
          error={errors.duracion?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-orange-500">
          <FiPlus size={15} className="mr-2" />
           Registrar Mantenimiento
        </Button>
      </div>
    </form>
  );
}

