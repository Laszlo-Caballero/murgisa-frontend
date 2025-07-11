"use client";
import React from "react";
import { LuPlus } from "react-icons/lu";
import StepFormProvider from "@/components/context/step-form/StepFormContext";
import HeaderStep from "@/components/ui/header-step/HeaderStep";
import ContainerStep from "@/components/ui/container-step/ContainerStep";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import StepTwo from "../pasos/StepTwo";
import StepThree from "../pasos/StepThree";
import StepFour from "../pasos/StepFour";
import Confirm from "../confirmar/Confirm";
import { ModalProps } from "@/interfaces/modal.interface";
import StepOne from "../pasos/StepOne";
import { IoClose } from "react-icons/io5";
import StepFive from "../pasos/StepFive";
import StepSix from "../pasos/StepSix";

export default function CrearVenta({ onClose }: ModalProps) {
  return (
    <div className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600">
      <header className="flex pb-4 justify-between border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-x-3">
          <div className="p-2 bg-green-100 rounded-lg dark:bg-green-500/30">
            <LuPlus className="size-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-bold text-xl dark:text-gray-200">
              Realizar Nueva Venta
            </p>
            <p className="text-sm text-gray-500 font-normal dark:text-gray-400">
              Complete la información paso a paso
            </p>
          </div>
        </div>
        <div
          className="h-full cursor-pointer"
          onClick={() => {
            onClose?.();
          }}
        >
          <IoClose className="dark:text-white" />
        </div>
      </header>

      <StepFormProvider className="flex flex-col items-center justify-center overflow-y-auto md:overflow-visible w-full gap-y-4 dark:text-gray-300">
        <HeaderStep
          steps={[
            "Información",
            "Cliente",
            "Servicios",
            "Personal",
            "Recursos",
            "Forma de Pago",
            "Confirmación",
          ]}
        />

        <ContainerStep className="w-full border border-gray-200 rounded-lg p-4  h-full dark:border-gray-600">
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
          <StepSix />
          <Confirm />
        </ContainerStep>
      </StepFormProvider>
    </div>
  );
}
