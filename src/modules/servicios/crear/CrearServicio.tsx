"use client";

import Input from "@/components/ui/input/Input";
import React from "react";
import Select from "@/components/ui/select/Select";

import { PiMoneyWavyLight } from "react-icons/pi";
import {
  LuClock,
  LuBriefcase,
  LuCirclePlus,
  LuPencilLine,
} from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { ModalProps } from "@/interfaces/modal.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ServicioSchema } from "@/schemas/Servicio.schema";
import { useQuery } from "@/hooks/useQuery";
import axios from "axios";
import { env } from "@/config/env";
import {
  Response,
  Servicio,
  TipoServicio,
} from "@/interfaces/responsefinal.interface";
import Load from "@/components/share/load/Load";
import { useMutation } from "@/hooks/useMutation";
import { z } from "zod";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";

export default function CrearServicio({ onClose }: ModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ServicioSchema),
  });
  const { data, isLoading } = useQuery<Response<TipoServicio[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get(`${url}/tipo-servicio`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const { refresh } = useTableContext<Servicio>();

  const { mutate, isLoading: loadCreate } = useMutation<
    z.infer<typeof ServicioSchema>,
    Response<Servicio[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.post<Response<Servicio[]>>(
        `${urlApi}/servicio`,
        {
          ...data,
          tipoServicioId: parseInt(data.tipoServicio.value),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },

    onError: () => {
      toast.error("Error al registrar el servicio");
    },
    onSuccess(data) {
      toast.success("Servicio registrado correctamente");
      refresh(data.data);
      onClose?.();
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-900 p-8 flex flex-col gap-y-4 text-gray-900 dark:text-white"
    >
      {(isLoading || loadCreate) && <Load />}

      <header className="flex items-center gap-x-3">
        <LuBriefcase size={40} className="text-purple-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Agregar Nuevo Servicio</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar un nuevo servicio en el sistema
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-4">
        <Input
          label="Nombre del Servicio"
          icon={<LuBriefcase />}
          placeholder="Ej: Construcción de Andenes"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Select
          label="Tipo de Servicio"
          icon={<LuCirclePlus />}
          placeholder="Selecciona un tipo de servicio"
          options={data?.data.map((tipo) => ({
            label: tipo.nombre,
            value: tipo.idTipoServicio.toString(),
          }))}
          onChange={(value) => {
            setValue("tipoServicio", {
              label: value.label?.toString() || "",
              value: value.value,
            });
          }}
          value={watch("tipoServicio")}
          error={errors.tipoServicio?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las características del servicio"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
        <Input
          label="Duración Estimada"
          icon={<LuClock />}
          placeholder="Ej: 4"
          {...register("duracion")}
          error={errors.duracion?.message}
        />
        <Input
          label="Precio"
          icon={<PiMoneyWavyLight />}
          placeholder="Ej: S/. 1500"
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9.]/g, "");
            const numericValue = parseFloat(value);
            setValue("precio", numericValue);
          }}
          value={watch("precio")?.toString()}
          error={errors.precio?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-purple-600 text-white py-3 font-semibold hover:bg-purple-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Servicio
        </Button>
      </div>
    </form>
  );
}
