import { z } from "zod";

export const RecursoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  categoria: z.object(
    {
      value: z.string().min(1, "La categoria es requerida"),
      label: z.string().min(1, "El nombre de la categoria es requerido"),
    },
    {
      message: "Categoria inválida",
    }
  ),

  proveedor: z.object(
    {
      value: z.string().min(1, "El proveedor es requerido"),
      label: z.string().min(1, "El nombre del proveedor es requerido"),
    },
    {
      message: "Proveedor inválido",
    }
  ),

  disponibilidad: z.object(
    {
      value: z.string().min(1, "La disponibilidad es requerida"),
      label: z.string().min(1, "El nombre de la disponibilidad es requerido"),
    },
    {
      message: "Disponibilidad inválida",
    }
  ),

  precio: z.string().min(0, "El precio es requerido"),
});
