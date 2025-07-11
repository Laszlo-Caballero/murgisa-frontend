"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import Badge from "@/components/ui/badge/Badge";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import Select from "@/components/ui/select/Select";
import { useQuery } from "@/hooks/useQuery";
import { Recurso, Response } from "@/interfaces/responsefinal.interface";
import { StepFourSchema } from "@/schemas/Venta/StepFour.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import { LuWrench } from "react-icons/lu";
import Table from "@/components/ui/single-table/SingleTable";
export default function StepFour() {
  const { data, isLoading } = useQuery<Response<Recurso[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<Recurso[]>>(`${url}/recurso`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
  console.log(data);
  const {
    currentStep,
    data: formData,
    setCurrentStep,
    updateStep,
  } = useStepForm();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StepFourSchema),
    defaultValues: {
      recursos: formData.stepFour.recurso,
    },
  });

  const onSubmit = handleSubmit((data) => {
    updateStep("stepFour", {
      recurso: data.recursos.map((r) => ({
        ...r,
        disponibilidad: {
          value: r.disponibilidad?.value ?? "1",
          label: r.disponibilidad?.label ?? "1",
        },
      })),
    });
    setCurrentStep(currentStep + 1);
  });
  console.log(errors);
  const recursosData = watch("recursos") || [];

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {isLoading && <Load />}

      <div className="flex items-center gap-x-2">
        <LuWrench className="size-6 text-purple-500 dark:text-purple-400" />
        <p className="font-bold text-xl">Asignación de Recursos</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          label="Seleccionar Recursos:"
          placeholder="Seleccione el recurso a asignar"
          options={data?.data?.map((recurso) => ({
            value: recurso.idRecurso.toString(),
            label: `${recurso.nombre}`,
          }))}
          onChange={(value) => {
            const selectedRecurso = data?.data.find(
              (p) => p.idRecurso.toString() === value.value
            );

            if (selectedRecurso) {
              setValue("recursos", [
                ...recursosData,
                {
                  ...selectedRecurso,
                  categoria: {
                    label: selectedRecurso.tipoRecurso?.nombre || "",
                    value:
                      selectedRecurso.tipoRecurso?.idTipoRecurso?.toString() ||
                      "",
                  },
                  disponibilidad: {
                    label:
                      selectedRecurso?.disponibilidad?.disponibilidad || "1",
                    value:
                      selectedRecurso?.disponibilidad?.disponibilidadId?.toString() ||
                      "1",
                  },
                  nombre: selectedRecurso.nombre,
                  precio: selectedRecurso.precio.toString(),
                  proveedor: {
                    label: selectedRecurso.proveedor?.nombreResponsable || "",
                    value:
                      selectedRecurso.proveedor?.idProovedor?.toString() || "",
                  },
                },
              ]);
            }
          }}
        />
        <Table
          data={recursosData || []}
          columns={[
            {
              header: "Nombre",
              cell: (props) => (
                <span className="flex items-center gap-x-2">
                  <LuWrench className="size-6 text-purple-500 dark:text-purple-400" />
                  {props.row?.nombre}
                </span>
              ),
            },
            {
              header: "Tipo de Recurso",
              cell: (props) => (
                <Badge className="dark:border-gray-500">
                  {props.row?.categoria?.label}
                </Badge>
              ),
            },
            {
              header: "Precio",
              cell: (props) => (
                <span className="text-purple-500 font-bold dark:text-purple-400">
                  {props.row?.precio}
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
                      const updatedPersonal = recursosData.filter(
                        (p) => p.idRecurso !== props.row.idRecurso
                      );
                      setValue("recursos", updatedPersonal);
                    }}
                  >
                    <RxCrossCircled />
                  </span>
                </div>
              ),
            },
          ]}
        />
        {errors.recursos && (
          <p className="text-red-500">{errors.recursos.message}</p>
        )}
      </div>

      <ButtonsStep maxSteps={5} />
    </form>
  );
}
