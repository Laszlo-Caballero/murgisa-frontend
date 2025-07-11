import InputDate from "@/components/ui/input-date/InputDate";
import Select from "@/components/ui/select/Select";
import React from "react";
import { LuFileText } from "react-icons/lu";

export default function StepOne() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <LuFileText className="size-6 text-blue-500 dark:text-blue-400" />
        <p className="font-bold text-xl">Informacion Basica de la venta</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Select
          label="Tipo de Servicio:"
          placeholder="Seleccione un tipo de servicio"
        />

        <InputDate
          label="Fecha de la Venta"
          placeholder="Seleccione la fecha de la venta"
        />
      </div>
    </div>
  );
}
