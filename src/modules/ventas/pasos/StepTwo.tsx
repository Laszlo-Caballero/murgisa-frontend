"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import Button from "@/components/ui/button/Button";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import InputDate from "@/components/ui/input-date/InputDate";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { useMutation } from "@/hooks/useMutation";
import { useQuery } from "@/hooks/useQuery";
import { Ciudad } from "@/interfaces/response.interface";
import { Cliente, Response } from "@/interfaces/responsefinal.interface";
import { StepTwoSchema } from "@/schemas/Venta/StepTwo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus, CiMail } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { toast } from "sonner";

export default function StepTwo() {
  const { currentStep, data, setCurrentStep, updateStep } = useStepForm();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(StepTwoSchema),
    defaultValues: data.stepTwo,
  });
  const { data: ciudades, isLoading: loadingCiudad } = useQuery({
    queryFn: async (url) => {
      const response = await axios.get<Response<Ciudad[]>>(
        `${url}/utils/ciudades`
      );
      return response.data;
    },
  });
  const [ruc, setRuc] = useState("");
  const [disableInput, setDisableInput] = useState(true);

  const { mutate, isLoading } = useMutation<
    {
      ruc: string;
    },
    Response<Cliente>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.get(`${urlApi}/cliente/ruc/${data.ruc}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: (data) => {
      const cliente = data.data;
      setValue("ruc", cliente.ruc);
      setValue("razonSocial", cliente.razonSocial);
      setValue("telefono", cliente.telefono);
      setValue("correo", cliente.correo);
      setValue("idCliente", cliente.idCliente);
      setValue("ciudad", {
        value: cliente.ciudad.idCiudad.toString(),
        label: cliente.ciudad.nombre,
      });
      setValue("direccion", cliente.direccion);
      setValue("dni", cliente.dni);
      setValue("nombre", cliente.nombre);
      setValue("fechaNacimiento", cliente.fechaNacimiento);
      setDisableInput(true);
      toast.success("Cliente encontrado exitosamente");
    },
    onError: () => {
      toast.error("Error al buscar el cliente, verifique el RUC ingresado");
      reset();
      setDisableInput(false);
    },
  });

  const onSubmit = handleSubmit((data) => {
    updateStep("stepTwo", data);
    setCurrentStep(currentStep + 1);
    toast.success("Información del cliente guardada correctamente");
  });

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {(isLoading || loadingCiudad) && <Load />}

      <div className="flex items-center gap-x-2">
        <LuUsers className="size-6 text-blue-500 dark:text-blue-400" />
        <p className="font-bold text-xl">Informacion del cliente</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4 overflow-y-auto max-h-[300px] px-2">
        <div className="md:col-span-2 flex items-end gap-x-2">
          <Input
            label="Buscar Cliente:"
            placeholder="Ingrese el ruc del cliente"
            classNameContainer="w-full"
            icon={<LuUserRound />}
            onChange={(e) => {
              setRuc(e.target.value);
            }}
            value={ruc}
          />
          <Button
            className="py-3 dark:bg-blue-500/30"
            type="button"
            onClick={async () => {
              await mutate({
                ruc: ruc,
              });
            }}
            disabled={!ruc}
          >
            Buscar
          </Button>
        </div>
        <Input
          label="Nombre del Cliente"
          icon={<MdOutlinePersonOutline />}
          placeholder="Ej: Juan Pérez"
          {...register("nombre")}
          error={errors.nombre?.message}
          disabled={disableInput}
        />
        <Input
          label="Correo del Cliente"
          icon={<CiMail />}
          placeholder="Ej: correo@ejemplo.com"
          {...register("correo")}
          error={errors.correo?.message}
          disabled={disableInput}
          type="email"
        />
        <Input
          label="Dirección"
          icon={<CiMail />}
          placeholder="Ej: Av. Principal 123"
          {...register("direccion")}
          disabled={disableInput}
          error={errors.direccion?.message}
        />
        <Input
          label="Dni"
          icon={<FaAddressCard />}
          placeholder="Ej: 74185296"
          {...register("dni")}
          error={errors.dni?.message}
        />
        <Input
          label="Telefono"
          icon={<FaAddressCard />}
          placeholder="Ej: 987654321"
          {...register("telefono")}
          disabled={disableInput}
          error={errors.telefono?.message}
        />

        <InputDate
          label="Fecha de Nacimiento"
          icon={<CiCirclePlus />}
          placeholder="Selecciona una fecha"
          error={errors.fechaNacimiento?.message}
          onChange={(date) => {
            setValue("fechaNacimiento", date);
          }}
          disabled={disableInput}
          value={watch("fechaNacimiento")}
        />

        <Input
          label="Razón Social"
          icon={<CiCirclePlus />}
          placeholder="Ej: Empresa S.A.C."
          {...register("razonSocial")}
          disabled={disableInput}
          error={errors.razonSocial?.message}
        />
        <Input
          label="RUC"
          icon={<FaAddressCard />}
          placeholder="Ej: 12345678901"
          {...register("ruc")}
          disabled={disableInput}
          error={errors.ruc?.message}
        />

        <Select
          label="Ciudad"
          icon={<CiCirclePlus />}
          placeholder="Selecciona una ciudad"
          options={ciudades?.data?.map((ciudad) => {
            return {
              label: ciudad.nombre,
              value: ciudad.idCiudad.toString(),
            };
          })}
          onChange={(value) => {
            setValue("ciudad", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("ciudad")}
          disabled={disableInput}
          error={errors.ciudad?.message}
        />
      </div>

      <ButtonsStep maxSteps={5} />
    </form>
  );
}
