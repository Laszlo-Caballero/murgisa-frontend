"use client";
import { VentaSteps } from "@/interfaces/venta.interface";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type StepFormContextProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  updateStep: <K extends keyof VentaSteps>(
    step: K,
    data: VentaSteps[K]
  ) => void;
  data: VentaSteps;
};

const StepFormContext = createContext<StepFormContextProps | undefined>(
  undefined
);

export default function StepFormProvider({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<VentaSteps>({
    stepOne: {
      fechaVenta: "",
      tipoServicio: {
        value: "",
        label: "",
      },
      fechaFin: "",
      fechaInicio: "",
    },
    stepTwo: {
      telefono: "",
      razonSocial: "",
      ruc: "",
      idCliente: -1,
      ciudad: {
        value: "",
        label: "",
      },
      correo: "",
      direccion: "",
      dni: "",
      nombre: "",
      fechaNacimiento: "",
    },
    stepThree: {
      servicios: [],
    },
    stepFour: {
      recurso: [],
    },
    stepFive: {
      personal: [],
    },
    stepSix: {
      formaPagoId: -1,
      nombre: "",
    },
  });

  const updateStep = <K extends keyof VentaSteps>(
    step: K,
    newData: VentaSteps[K]
  ) => {
    setData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        ...newData,
      },
    }));
  };

  return (
    <StepFormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        updateStep,
        data,
      }}
    >
      <div className={className}>{children}</div>
    </StepFormContext.Provider>
  );
}

export function useStepForm() {
  const context = useContext(StepFormContext);
  if (!context) {
    throw new Error("useStepForm must be used within a StepFormProvider");
  }
  return context;
}
