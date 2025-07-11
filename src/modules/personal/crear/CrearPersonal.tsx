"use client";
import Input from "@/components/ui/input/Input";
import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import Select from "@/components/ui/select/Select";
import { LuHouse } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import { useQuery } from "@/hooks/useQuery";
import axios from "axios";
import { env } from "@/config/env";
import { GrUserWorker } from "react-icons/gr";

import Load from "@/components/share/load/Load";
import {
  Cargo,
  Personal,
  Profesion,
  Response,
} from "@/interfaces/responsefinal.interface";
import { Departamento } from "@/interfaces/response.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalSchema } from "@/schemas/Personal.schema";
import { useMutation } from "@/hooks/useMutation";
import { z } from "zod";
import { useTableContext } from "@/context/TableContext";
import { toast } from "sonner";

interface CrearPersonalProps {
  onClose?: () => void;
}

export default function CrearPersonal({ onClose }: CrearPersonalProps) {
  const { data: profesiones, isLoading: loadingProfesiones } = useQuery<
    Response<{ profesiones: Profesion[] }>
  >({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/profesion`);
      return response.data;
    },
  });

  const { data: cargos, isLoading: loadingCargos } = useQuery<
    Response<{ cargos: Cargo[] }>
  >({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/cargo`);
      return response.data;
    },
  });

  const { data: departamentos, isLoading: loadingDepartamentos } = useQuery<
    Response<Departamento[]>
  >({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/departamento`);
      return response.data;
    },
  });

  const { refresh } = useTableContext<Personal>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(PersonalSchema),
  });

  const { mutate, isLoading } = useMutation<
    z.infer<typeof PersonalSchema>,
    Response<Personal[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const response = await axios.post(
        `${urlApi}/personal`,
        {
          ...data,
          cargoId: parseInt(data.cargo.value),
          profesionId: parseInt(data.profesion.value),
          departamentoId: parseInt(data.departamento.value),
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
      toast.success("Empleado registrado correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError() {
      toast.error("Error al registrar el empleado");
    },
  });

  console.log("Profesiones:", errors);

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 overflow-y-auto md:overflow-visible"
    >
      {(loadingProfesiones ||
        loadingCargos ||
        loadingDepartamentos ||
        isLoading) && <Load />}
      <header className="flex items-center gap-x-3">
        <GrUserWorker size={40} className="text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">
            Agregar Nuevo Empleado
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo empleado en el sistema
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
        <Input
          label="Nombre"
          icon={<LuUserRound />}
          placeholder="Ingrese el nombre "
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Apellido Paterno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido paterno"
          {...register("apellido_paterno")}
          error={errors.apellido_paterno?.message}
        />
        <Input
          label="Apellido Materno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido materno"
          {...register("apellido_materno")}
          error={errors.apellido_materno?.message}
        />
        <Input
          label="Sueldo"
          icon={<TbCash />}
          placeholder="1000"
          onChange={(e) => {
            const value = e.target.value;
            const numericValue = parseFloat(value);
            if (!isNaN(numericValue)) {
              setValue("sueldo", numericValue);
            } else {
              setValue("sueldo", -1);
            }
          }}
          error={errors.sueldo?.message}
        />
        <Input
          label="Numero de Documento"
          icon={<HiOutlineClipboardDocumentList />}
          placeholder="920121233"
          {...register("numeroDocumento")}
          error={errors.numeroDocumento?.message}
        />
        <Input
          label="Telefono"
          icon={<LuPhone />}
          placeholder="999999999"
          {...register("telefono")}
          error={errors.telefono?.message}
        />

        <Select
          icon={<LuUserRound />}
          label="Cargo"
          placeholder="Seleccione un cargo"
          options={cargos?.data.cargos.map((cargo) => ({
            value: cargo.idCargo.toString(),
            label: cargo.cargo,
          }))}
          onChange={(value) => {
            setValue("cargo", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("cargo")}
          error={errors.cargo?.message}
        />

        <Select
          icon={<LuUserRound />}
          label="Profesion"
          placeholder="Seleccione una profesion"
          options={profesiones?.data?.profesiones.map((profesion) => ({
            value: profesion.idProfesion.toString(),
            label: profesion.titulo,
          }))}
          onChange={(value) => {
            setValue("profesion", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("profesion")}
          error={errors.profesion?.message}
        />

        <Select
          icon={<LuHouse />}
          label="Departamento"
          placeholder="Seleccione un departamento"
          options={departamentos?.data.map((departamento) => ({
            value: departamento.idDepartamento.toString(),
            label: departamento.titulo,
          }))}
          onChange={(value) => {
            setValue("departamento", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("departamento")}
          error={errors.departamento?.message}
        />

        <div className="col-span-2 flex items-end justify-end">
          <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500/30">
            Registrar Empleado
          </Button>
        </div>
      </div>
    </form>
  );
}
