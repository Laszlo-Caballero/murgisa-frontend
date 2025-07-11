import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { useQuery } from "@/hooks/useQuery";
import { FormaPago, Response } from "@/interfaces/responsefinal.interface";
import cx from "@/libs/cx";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuCalendar, LuCreditCard } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { z } from "zod";

export default function StepSix() {
  const { data, isLoading } = useQuery<Response<FormaPago[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<FormaPago[]>>(`${url}/forma-pago`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });
  const {
    data: formData,
    currentStep,
    setCurrentStep,
    updateStep,
  } = useStepForm();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(
      z.object({
        formaPagoId: z.string().min(1, "Seleccione una forma de pago"),
        nombre: z.string().optional(),
      })
    ),
    defaultValues: {
      formaPagoId: formData.stepSix.formaPagoId.toString(),
      nombre: formData.stepSix.nombre || "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    updateStep("stepSix", {
      formaPagoId: parseInt(data.formaPagoId),
      nombre: data.nombre || "",
    });
    setCurrentStep(currentStep + 1);
  });

  const formaSelect = watch("formaPagoId");

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {isLoading && <Load />}

      <div className="flex items-center gap-x-2">
        <LuCreditCard className="size-6 text-green-500 dark:text-green-400" />
        <p className="font-bold text-xl">Forma de Pago</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {data?.data.map((forma) => (
          <CardInfo
            key={forma.idFormaPago}
            title={forma.tipo}
            onClick={() => {
              setValue("formaPagoId", forma.idFormaPago.toString());
              setValue("nombre", forma.tipo);
            }}
            icon={<FaRegMoneyBillAlt size={20} className="text-green-400" />}
            className={{
              container: cx(
                "bg-white dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-300",
                formaSelect === forma?.idFormaPago.toString() &&
                  "border border-green-500 dark:border-green-400"
              ),
              header: {
                icon: "bg-green-100 dark:bg-green-500/30",
                description: "dark:text-gray-400",
              },
              span: "bg-green-100 text-green-700 font-bold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
            }}
            description={forma?.descripcion}
            span={forma?.estado ? "Activo" : "Inactivo"}
          >
            <div className="flex items-center gap-x-24">
              <span className="flex flex-col gap-y-1">
                <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
                  Comisión
                </p>
                <p className="text-sm font-semibold flex items-center ">
                  <MdOutlineAttachMoney className="text-green-600 dark:text-green-400" />{" "}
                  {forma?.comision}%
                </p>
              </span>
              <span className="flex flex-col gap-y-1">
                <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
                  Fecha de Registro
                </p>
                <p className="text-sm font-semibold flex items-center gap-x-1">
                  <LuCalendar className="text-blue-600 dark:text-blue-400" />{" "}
                  {forma?.registeredAt?.split("T")[0]}
                </p>
              </span>
            </div>
          </CardInfo>
        ))}
      </div>

      {errors.formaPagoId && (
        <p className="text-red-500 text-sm mt-2">
          {errors.formaPagoId.message}
        </p>
      )}

      <ButtonsStep maxSteps={5} />
    </form>
  );
}
