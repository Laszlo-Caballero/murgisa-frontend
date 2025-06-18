import { useStepForm } from "@/components/context/step-form/StepFormContext";
import { Children, PropsWithChildren } from "react";

export default function ContainerStep({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const { currentStep } = useStepForm();

  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        return index + 1 === currentStep && child;
      })}
    </div>
  );
}
