"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type StepFormContextProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

const StepFormContext = createContext<StepFormContextProps | undefined>(
  undefined
);

export default function StepFormProvider({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepFormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
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
