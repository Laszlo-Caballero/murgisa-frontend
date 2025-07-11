import { z } from "zod";

export const MantenimientoPreventivoSchema = z.object({
  fechaMantenimiento: z.string().min(1, "La fecha de mantenimiento es requerida"),
  Prioridad: z.string().min(1, "La prioridad es requerida"),
  recurso: z.object(
    {
      value: z.string().min(1, "El recurso es requerido"),
      label: z.string().min(1, "El nombre de la recurso es requerido"),
    },
    {
      message: "Recurso inválido",
    }
  ),
   personal: z.object(
    {
      value: z.string().min(1, "El personal es requerido"),
      label: z.string().min(1, "El nombre del personal es requerido"),
    },
    {
      message: "Personal inválido",
    }
  ),
   horario: z.object(
    {
      value: z.string().min(1, "El horario es requerido"),
      label: z.string().min(1, "El nombre del horario es requerido"),
    },
    {
      message: "Horario inválido",
    }
  ),
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
});
