"use client";
import Input from "@/components/ui/input/Input";
import React from "react";
import { LuGraduationCap, LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfesionSchema } from "@/schemas/Profesion.schema";
import { z } from "zod";
import { ModalProps } from "@/interfaces/modal.interface";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { toast } from "sonner";
import { Profesion, Response } from "@/interfaces/responsefinal.interface";
import { useTableContext } from "@/context/TableContext";
import Load from "@/components/share/load/Load";

export default function CrearProfesion({ onClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProfesionSchema),
  });
  const { refresh } = useTableContext<Profesion>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof ProfesionSchema>,
    Response<Profesion[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.post(`${urlApi}/profesion`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Profesión registrada correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error("Error al registrar la profesión, intente nuevamente");
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-800 p-8 flex flex-col gap-y-4"
    >
      {isLoading && <Load />}
      <header className="flex items-center gap-x-3">
        <LuGraduationCap size={40} className="text-blue-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-black dark:text-white">
            Agregar Nueva Profesión
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar una nueva profesión en el sistema
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-y-4">
        <Input
          label="Titulo de la Profesión"
          icon={<LuGraduationCap />}
          placeholder="Ej: Ingeniero de Sistemas"
          className="dark:text-white dark:placeholder-gray-300"
          {...register("titulo")}
          error={errors.titulo?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las responsabilidad y funciones principales"
          className="dark:text-white dark:placeholder-gray-300"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Profesión
        </Button>
      </div>
    </form>
  );
}
