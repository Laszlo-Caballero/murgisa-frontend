"use client";
import Load from "@/components/share/load/Load";
import Button from "@/components/ui/button/Button";
import InputDate from "@/components/ui/input-date/InputDate";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { useTableContext } from "@/context/TableContext";
import { useMutation } from "@/hooks/useMutation";
import { useQuery } from "@/hooks/useQuery";
import { ModalProps } from "@/interfaces/modal.interface";
import { Recurso } from "@/interfaces/response.interface";
import {
  NotaSalida,
  Response,
  Venta,
} from "@/interfaces/responsefinal.interface";
import { SalidaSchema } from "@/schemas/Nota/Salida.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { LuCirclePlus, LuClipboardList } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";

export default function CrearNotaSalida({ onClose }: ModalProps) {
  const { data: recurso, isLoading: isLoadingRecurso } = useQuery<
    Response<Recurso[]>
  >({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<Recurso[]>>(`${url}/recurso`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const [idVenta, setIdVenta] = useState<string>("");

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SalidaSchema),
  });
  const { mutate, isLoading: loadVenta } = useMutation<
    {
      id: number | string;
    },
    Response<Venta>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.get<Response<Venta>>(
        `${urlApi}/venta/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(`Venta ${data.data.idVenta} encontrada`);
      setValue("venta", data.data.idVenta.toString());
    },
    onError: () => {
      toast.error(`Error al buscar la venta intente nuevamente`);
      setValue("venta", "");
    },
  });

  const { refresh } = useTableContext<NotaSalida>();

  const { mutate: mutateSalida, isLoading } = useMutation<
    z.infer<typeof SalidaSchema>,
    Response<NotaSalida[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.post<Response<NotaSalida[]>>(
        `${urlApi}/nota-salida`,
        {
          idVenta: parseInt(data.venta),
          idRecurso: parseInt(data.recurso.value),
          fecha: data.fecha,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Nota de salida registrada correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error("Error al registrar la nota de salida");
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutateSalida)}
      className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border dark:border-gray-700"
    >
      {(isLoadingRecurso || isLoading || loadVenta) && <Load />}

      <header className="flex items-center gap-x-3">
        <LuClipboardList size={40} className="text-pink-700" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-white">
            Registrar Nota de Salida
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar una nueva nota de salida
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-4 dark:text-white">
        <InputDate
          label="Fecha"
          placeholder="Fecha de Salida"
          icon={<MdDateRange />}
          onChange={(date) => setValue("fecha", date)}
          value={watch("fecha")}
          error={errors.fecha?.message}
        />
        <div className="flex gap-x-2 items-end">
          <Input
            label="Id Venta"
            icon={<LuCirclePlus />}
            placeholder="Selecciona una Venta"
            onChange={(e) => setIdVenta(e.target.value)}
            value={idVenta}
            error={errors.venta?.message}
          />

          <Button
            className="max-h-max mb-1"
            type="button"
            onClick={() => mutate({ id: idVenta })}
          >
            Buscar
          </Button>
        </div>
        <Select
          label="Recurso"
          icon={<LuCirclePlus />}
          placeholder="Selecciona un recurso"
          options={recurso?.data?.map((item) => ({
            value: item.idRecurso.toString(),
            label: item.nombre,
          }))}
          onChange={(value) =>
            setValue("recurso", {
              label: value.label?.toString() || "",
              value: value.value,
            })
          }
          value={watch("recurso")}
          error={errors.recurso?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-pink-600 text-white py-3 font-semibold hover:bg-pink-600">
          <FiPlus size={15} className="mr-2" />
          Registrar Nota de Salida
        </Button>
      </div>
    </form>
  );
}
