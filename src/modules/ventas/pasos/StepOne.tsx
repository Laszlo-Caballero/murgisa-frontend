"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import InputDate from "@/components/ui/input-date/InputDate";
import Select from "@/components/ui/select/Select";
import { useQuery } from "@/hooks/useQuery";
import {
  Response,
  Servicio,
  TipoServicio,
} from "@/interfaces/responsefinal.interface";
import { StepOneSchema } from "@/schemas/Venta/StepOne.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { LuFileText } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuCalendarCheck2 } from "react-icons/lu";

export default function StepOne() {
  const { data, isLoading } = useQuery<Response<TipoServicio[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<TipoServicio[]>>(
        `${url}/tipo-servicio`,
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
    data: formData,
    updateStep,
    currentStep,
    setCurrentStep,
  } = useStepForm();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(StepOneSchema),
    defaultValues: formData.stepOne,
  });

  const onSubmit = handleSubmit((data) => {
    updateStep("stepOne", data);
    setCurrentStep(currentStep + 1);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {isLoading && <Load />}
      <div className="flex items-center gap-x-2">
        <LuFileText className="size-6 text-blue-500 dark:text-blue-400" />
        <p className="font-bold text-xl">Informacion Basica de la venta</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Select
          label="Tipo de Servicio:"
          placeholder="Seleccione un tipo de servicio"
          icon={<LuShoppingCart />}
          options={data?.data.map((servicio) => ({
            value: servicio.idTipoServicio?.toString(),
            label: servicio.nombre,
          }))}
          onChange={(value) => {
            setValue("tipoServicio", {
              label: value.label?.toString() || "",
              value: value.value,
            });
          }}
          value={watch("tipoServicio")}
          error={
            errors.tipoServicio?.message || errors.tipoServicio?.label?.message
          }
        />

        <InputDate
          icon={<LuCalendarCheck2 />}
          label="Fecha de la Venta"
          placeholder="Seleccione la fecha de la venta"
          onChange={(date) => {
            setValue("fechaVenta", date);
          }}
          value={watch("fechaVenta")}
          error={errors.fechaVenta?.message}
        />
      </div>
      <ButtonsStep maxSteps={5} />
    </form>
  );
}
