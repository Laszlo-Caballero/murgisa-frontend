"use client";

import Input from "@/components/ui/input/Input";
import React from "react";

import { z } from "zod";
import { LuLayers } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { Response } from "@/interfaces/responsefinal.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FiPlus } from "react-icons/fi";
import { TipoRecursoSchema } from "@/schemas/TipoRecurso.schema";

import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";
import axios from "axios";

import { TipoRecurso } from "@/interfaces/response.interface";
import Load from "@/components/share/load/Load";

export default function CrearTipoRecurso({ onClose }: ModalProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(TipoRecursoSchema),
  });

  const { refresh } = useTableContext<TipoRecurso>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof TipoRecursoSchema>,
    Response<TipoRecurso[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/tipo-recurso`,
        {
          nombre: data.nombre,
          descripcion: data.descripcion,
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
      toast.success("Recurso registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el recurso. Por favor, intenta nuevamente."
      );
    },
  });
  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white p-8 flex flex-col gap-y-4  dark:bg-gray-800 border dark:border-gray-700"
    >
      {isLoading && <Load />}
      <header className="flex items-center gap-x-3">
        <LuLayers size={40} className="text-red-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold  dark:text-white">
            Agregar Nuevo Tipo de Recurso
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo tipo de recurso en el
            sistema
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4  dark:text-white">
        <Input
          label="Nombre del Tipo de Recurso"
          icon={<LuLayers />}
          placeholder="Ej: Contrucción de Andenes"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las características del tipo de recurso"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Tipo de recurso
        </Button>
      </div>
    </form>
  );
}
