"use client";

import Input from "@/components/ui/input/Input";
import React from "react";

import { LuBriefcase, LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TipoServicioSchema } from "@/schemas/TipoServicio.schema";
import { useMutation } from "@/hooks/useMutation";
import { z } from "zod";
import { Response, TipoServicio } from "@/interfaces/responsefinal.interface";
import axios from "axios";
import { useTableContext } from "@/context/TableContext";
import { toast } from "sonner";
import { ModalProps } from "@/interfaces/modal.interface";
import Load from "@/components/share/load/Load";

export default function CrearTipoServicio({ onClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TipoServicioSchema),
  });

  const { refresh } = useTableContext<TipoServicio>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof TipoServicioSchema>,
    Response<TipoServicio[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.post<Response<TipoServicio[]>>(
        `${urlApi}/tipo-servicio`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    },

    onSuccess: (data) => {
      toast.success("Tipo de servicio registrado correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error("Error al registrar el tipo de servicio");
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-900 p-8 flex flex-col gap-y-4 text-gray-900 dark:text-white"
    >
      {isLoading && <Load />}
      <header className="flex items-center gap-x-3">
        <LuBriefcase size={40} className="text-purple-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold">
            Agregar Nuevo Tipo de Servicio
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar un nuevo tipo de servicio en el
            sistema
          </p>
        </div>
      </header>

      <div className="grid gap-4">
        <Input
          label="Nombre del Tipo de Servicio"
          icon={<LuBriefcase />}
          placeholder="Ej: Construcción de Andenes"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las características del servicio"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-purple-600 text-white py-3 font-semibold hover:bg-purple-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Tipo de Servicio
        </Button>
      </div>
    </form>
  );
}
