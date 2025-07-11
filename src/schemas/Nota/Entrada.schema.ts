import { z } from "zod";

export const EntradaSchema = z.object({
  proveedor: z.object(
    {
      label: z.string().min(1, {
        message: "Proveedor es requerido",
      }),
      value: z.string().min(1, {
        message: "Proveedor es requerido",
      }),
    },
    {
      message: "Proveedor es requerido",
    }
  ),
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

  cantidad: z
    .string({
      required_error: "Cantidad es requerida",
    })
    .min(1, {
      message: "Cantidad es requerida",
    }),

  monto: z
    .string({
      required_error: "Monto es requerido",
    })
    .min(1, {
      message: "Monto es requerido",
    }),
  fecha: z
    .string({
      required_error: "Fecha es requerida",
    })
    .min(1, {
      message: "Fecha es requerida",
    }),
});
