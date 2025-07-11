import { z } from "zod";

export const StepOneSchema = z.object({
  fechaVenta: z.string().min(1, "Fecha de venta es requerida"),
  tipoServicio: z.object(
    {
      value: z.string().min(1, "Tipo de servicio es requerido").max(100),
      label: z.string().min(1, "Tipo de servicio es requerido").max(100),
    },
    {
      message: "Tipo de servicio es requerido",
    }
  ),
  fechaInicio: z
    .string({
      message: "Fecha de inicio es requerida",
    })
    .min(1, "Fecha de inicio es requerida"),
  fechaFin: z
    .string({
      message: "Fecha de fin es requerida",
    })
    .min(1, "Fecha de fin es requerida"),
});
