"use client";
import Input from "@/components/ui/input/Input";
import React from "react";
import { LuPencilLine } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { FiPlus } from "react-icons/fi";
import { LuCar } from "react-icons/lu";
import Select from "@/components/ui/select/Select";
import { LuPackage } from "react-icons/lu";
import {
  NotaEntrada,
  Proveedor,
  Recurso,
  Response,
} from "@/interfaces/responsefinal.interface";
import axios from "axios";
import { useQuery } from "@/hooks/useQuery";
import InputDate from "@/components/ui/input-date/InputDate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EntradaSchema } from "@/schemas/Nota/Entrada.schema";
import { useMutation } from "@/hooks/useMutation";
import { z } from "zod";
import { toast } from "sonner";
import Load from "@/components/share/load/Load";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";

export default function CrearNotaEntrada({ onClose }: ModalProps) {
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

  const { data: Proveedor, isLoading: loadingProveedor } = useQuery<
    Response<Proveedor[]>
  >({
    queryFn: async (url, token) => {
      const response = await axios.get<Response<Proveedor[]>>(
        `${url}/proveedor`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(EntradaSchema),
  });
  const { refresh } = useTableContext<NotaEntrada>();
  const { mutate, isLoading } = useMutation<
    z.infer<typeof EntradaSchema>,
    Response<NotaEntrada[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const response = await axios.post(
        `${urlApi}/nota-entrada`,
        {
          idRecurso: parseInt(data.recurso.value),
          idProveedor: parseInt(data.proveedor.value),
          cantidad: parseInt(data.cantidad),
          monto: parseFloat(data.monto),
          fecha: data.fecha,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess(data) {
      toast.success("Nota de entrada registrada correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError(error) {
      toast.error("Error al registrar la nota de entrada", {});
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 border dark:border-gray-700"
    >
      {(isLoadingRecurso || loadingProveedor || isLoading) && <Load />}
      <header className="flex items-center gap-x-3">
        <LuCar size={40} className="text-pink-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-white">
            Agregar Nueva Nota de Entrada
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar una nueva nota de entrada en el
            sistema
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-y-4 dark:text-white">
        <Select
          label="Recurso"
          icon={<LuPackage />}
          placeholder="Selecciona un Recurso"
          options={recurso?.data.map((item) => ({
            value: item?.idRecurso?.toString(),
            label: item.nombre,
          }))}
          onChange={(value) =>
            setValue("recurso", {
              label: value.label?.toString() || "",
              value: value.value,
            })
          }
          value={watch("recurso")}
        />

        <Select
          label="Proveedor"
          icon={<LuPackage />}
          placeholder="Selecciona un Proveedor"
          options={Proveedor?.data.map((item) => ({
            value: item.idProovedor?.toString(),
            label: item.razonSocial,
          }))}
          onChange={(value) =>
            setValue("proveedor", {
              label: value.label?.toString() || "",
              value: value.value,
            })
          }
          value={watch("proveedor")}
        />
        <Input
          label="Cantidad"
          icon={<LuPencilLine />}
          placeholder="Indique la cantidad a recibir"
          {...register("cantidad")}
          error={errors.cantidad?.message}
        />
        <Input
          label="Monto"
          icon={<LuPencilLine />}
          placeholder="Indique el monto total"
          {...register("monto")}
          error={errors.monto?.message}
        />
        <InputDate
          icon={<LuPencilLine />}
          label="Fecha"
          placeholder="Fecha de recepción"
          onChange={(date) => setValue("fecha", date)}
          value={watch("fecha")}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-pink-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Nota de Entrada
        </Button>
      </div>
    </form>
  );
}
