"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import Badge from "@/components/ui/badge/Badge";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import Select from "@/components/ui/select/Select";
import Table from "@/components/ui/single-table/SingleTable";
import { useQuery } from "@/hooks/useQuery";
import { Personal, Response } from "@/interfaces/responsefinal.interface";
import { StepFiveSchema } from "@/schemas/Venta/StepFive.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { LuUserCheck } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";

export default function StepFive() {
  const { data, isLoading } = useQuery<Response<Personal[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<Personal[]>>(`${url}/personal`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

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
    resolver: zodResolver(StepFiveSchema),
    defaultValues: {
      persona: formData.stepFive.personal,
    },
  });

  const onSubmit = handleSubmit((data) => {
    updateStep("stepFive", {
      personal: data.persona,
    });
    setCurrentStep(currentStep + 1);
  });

  const personalData = watch("persona");

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {isLoading && <Load />}

      <div className="flex items-center gap-x-2">
        <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
        <p className="font-bold text-xl">Asignación de Personal</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Select
          label="Seleccionar Personal:"
          placeholder="Seleccione el personal a asignar"
          options={data?.data.map((personal) => ({
            value: personal.idPersonal.toString(),
            label: `${personal.nombre} ${personal.apellido_paterno} ${personal.apellido_materno}`,
          }))}
          onChange={(value) => {
            const selectedPersonal = data?.data.find(
              (p) => p.idPersonal.toString() === value.value
            );

            if (selectedPersonal) {
              setValue("persona", [
                ...personalData,
                {
                  ...selectedPersonal,
                  idPersonal: selectedPersonal.idPersonal,
                  cargo: {
                    value: selectedPersonal.cargo.idCargo.toString() || "",
                    label: selectedPersonal.cargo.cargo,
                  },
                  profesion: {
                    value:
                      selectedPersonal.profesion.idProfesion.toString() || "",
                    label: selectedPersonal.profesion.titulo,
                  },
                  departamento: {
                    value:
                      selectedPersonal.departamento.idDepartamento?.toString() ||
                      "",
                    label: selectedPersonal.departamento.titulo || "",
                  },
                },
              ]);
            }
          }}
        />
        <Table
          data={personalData}
          columns={[
            {
              header: "Nombre",
              cell: (props) => (
                <span className="flex items-center gap-x-2">
                  <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
                  {props.row?.nombre}
                </span>
              ),
            },
            {
              header: "Profesión",
              cell: (props) => (
                <Badge className="dark:border-gray-500">
                  {props.row?.profesion?.label}
                </Badge>
              ),
            },
            {
              header: "Salario",
              cell: (props) => (
                <span className="text-purple-500 font-bold dark:text-purple-400">
                  {props.row?.sueldo}
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
                      const updatedPersonal = personalData.filter(
                        (p) => p.idPersonal !== props.row?.idPersonal
                      );
                      setValue("persona", updatedPersonal);
                    }}
                  >
                    <RxCrossCircled />
                  </span>
                </div>
              ),
            },
          ]}
        />
        {errors.persona && (
          <p className="text-red-500">{errors.persona.message}</p>
        )}
      </div>

      <ButtonsStep maxSteps={5} />
    </form>
  );
}
