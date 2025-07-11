"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import Select from "@/components/ui/select/Select";
import Table from "@/components/ui/table/Table";
import { useQuery } from "@/hooks/useQuery";
import { Response, Servicio } from "@/interfaces/responsefinal.interface";
import { StepThreeSchema } from "@/schemas/Venta/StepThree.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { LuBox } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { z } from "zod";

export default function StepThree() {
  const {
    data: formData,
    currentStep,
    setCurrentStep,
    updateStep,
  } = useStepForm();

  const { data, isLoading } = useQuery<Response<Servicio[]>>({
    queryFn: async (url, token) => {
      const res = await fetch(`${url}/servicio`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    },
  });

  const {
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof StepThreeSchema>>({
    resolver: zodResolver(StepThreeSchema),
    defaultValues: {
      servicios: formData.stepThree.servicios,
    },
  });

  const servicios = watch("servicios") || [];

  const onSubmit = handleSubmit((data) => {
    updateStep("stepThree", data);
    setCurrentStep(currentStep + 1);
  });

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {isLoading && <Load />}

      <div className="flex items-center gap-x-2">
        <LuBox className="size-6 text-green-500" />
        <p className="font-bold text-xl">Servicios a Contratar</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          label="Servicio:"
          placeholder="Seleccione un tipo de servicio"
          options={
            data?.data.map((servicio) => ({
              value: servicio.idServicio?.toString(),
              label: servicio.nombre,
            })) || []
          }
          onChange={(value) => {
            const selectedServicio = data?.data.find(
              (servicio) => servicio.idServicio?.toString() === value.value
            );
            if (selectedServicio) {
              console.log("Selected Servicio:", selectedServicio);
              setValue("servicios", [
                ...servicios,
                {
                  ...selectedServicio,
                  idServicio: selectedServicio.idServicio,
                  tipoServicio: {
                    value:
                      selectedServicio.tipoServicio?.idTipoServicio?.toString() ||
                      "",
                    label: selectedServicio.tipoServicio?.nombre || "",
                  },
                },
              ]);
            }
          }}
        />
        <Table
          data={servicios}
          columns={[
            {
              header: "Servicio",
              cell: (props) => <span>{props.row.nombre}</span>,
            },
            {
              header: "Duración",
              cell: (props) => <span>{props.row.duracion}</span>,
            },
            {
              header: "Precio",
              cell: (props) => (
                <span className="text-green-500 font-bold">
                  {props.row.precio}
                </span>
              ),
            },
            {
              header: " ",
              cell: (props) => (
                <div className="w-full flex">
                  <span
                    className="p-2 rounded-lg border"
                    onClick={() => {
                      const updatedServicios = servicios.filter(
                        (servicio) =>
                          servicio.idServicio !== props.row.idServicio
                      );
                      setValue("servicios", updatedServicios);
                    }}
                  >
                    <RxCrossCircled />
                  </span>
                </div>
              ),
            },
          ]}
        />
        {errors.servicios && (
          <p className="text-red-500">{errors.servicios.message}</p>
        )}
      </div>

      <ButtonsStep maxSteps={5} />
    </form>
  );
}
