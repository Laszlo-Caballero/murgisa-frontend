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
   TipoMantenimiento: z.object(
    {
      value: z.string().min(1, "El mantenimiento es requerido"),
      label: z.string().min(1, "El nombre del mantenimiento es requerido"),
    },
    {
      message: "Mantenimiento inválido",
    }
  ),
});
