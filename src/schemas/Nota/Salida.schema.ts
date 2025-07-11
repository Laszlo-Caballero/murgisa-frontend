import { z } from "zod";

export const SalidaSchema = z.object({
  venta: z.string({ required_error: "Venta es requerida" }).min(1, {
    message: "Venta es requerida",
  }),
  recurso: z.object(
    {
      label: z.string().min(1, {
        message: "Recurso es requerido",
      }),
      value: z.string().min(1, {
        message: "Recurso es requerido",
      }),
    },
    {
      message: "Recurso es requerido",
    }
  ),
  fecha: z
    .string({
      message: "Fecha es requerida",
    })
    .min(1, {
      message: "Fecha es requerida",
    }),
});
