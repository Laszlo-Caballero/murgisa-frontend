import React from "react";
import Button from "../button/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
interface ButtonsStepProps {
  maxSteps?: number;
}

export default function ButtonsStep({ maxSteps }: ButtonsStepProps) {
  const { currentStep, setCurrentStep } = useStepForm();

  return (
    <div className="w-full flex items-center ">
      {currentStep > 1 && (
        <Button type="button" onClick={() => setCurrentStep(currentStep - 1)}>
          Atras
        </Button>
      )}

      <Button
        className="px-12 flex ml-auto items-center gap-x-4 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentStep(currentStep + 1)}
        disabled={maxSteps ? currentStep >= maxSteps : false}
        type="button"
      >
        Siguiente <IoIosArrowForward />
      </Button>
    </div>
  );
}
