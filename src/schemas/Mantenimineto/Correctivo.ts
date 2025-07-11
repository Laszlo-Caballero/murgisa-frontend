import { z } from "zod";

export const CorrectivoSchema = z.object({
  tipo: z.object(
    {
      label: z.string().min(1, {
        message: "Tipo de mantenimiento es requerido",
      }),
      value: z.string().min(1, {
        message: "Tipo de mantenimiento es requerido",
      }),
    },
    {
      message: "Tipo de mantenimiento es requerido",
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

  personal: z.object(
    {
      label: z.string().min(1, {
        message: "Personal es requerido",
      }),
      value: z.string().min(1, {
        message: "Personal es requerido",
      }),
    },
    {
      message: "Personal es requerido",
    }
  ),

  fechaMantenimiento: z.string().min(1, {
    message: "Fecha de mantenimiento es requerida",
  }),
});
