"use client";

import { useStepForm } from "@/components/context/step-form/StepFormContext";
import cx from "@/libs/cx";
import { useEffect, useState } from "react";

interface HeaderStepProps {
  steps: string[];
}

export default function HeaderStep({ steps }: HeaderStepProps) {
  const { currentStep } = useStepForm();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex w-full items-center flex-col gap-y-2 justify-center bg-gray-50 p-4 rounded-lg dark:bg-gray-700/50">
        <div
          className={cx(
            "size-10 rounded-full min-w-[40px] flex items-center justify-center",
            "bg-green-600 text-white dark:bg-green-400/50"
          )}
        >
          {currentStep}
        </div>
        <p className="text-sm ml-2 text-green-600 font-semibold dark:text-emerald-600 ">
          {steps[currentStep - 1]}
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center relative bg-gray-50 p-4 rounded-lg dark:bg-gray-700/50">
      {steps.map((step, index) => (
        <div
          className={cx(
            "flex flex-col gap-y-2",
            index + 1 !== steps.length && "w-full"
          )}
          key={index}
        >
          <div className="flex items-center">
            <div
              className={cx(
                "size-10 rounded-full min-w-[40px] flex items-center justify-center",
                currentStep === index + 1 || currentStep > index + 1
                  ? "bg-green-600 text-white dark:bg-green-400/50"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-300",
                currentStep + 1 === index + 1 &&
                  "bg-green-100 text-green-500 border border-green-200 dark:bg-green-400/20 dark:border-none dark:text-gray-300"
              )}
            >
              {index + 1}
            </div>
            {index + 1 !== steps.length && (
              <span className="h-1 w-full bg-slate-200 dark:bg-gray-600" />
            )}
          </div>
          <p
            className={cx(
              "text-sm",
              index + 1 === currentStep && "text-green-600 font-semibold dark:text-emerald-600 "
            )}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}
