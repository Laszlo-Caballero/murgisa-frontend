import { z } from "zod";
import { RecursoSchema } from "../Recurso.schema";

export const StepFourSchema = z.object({
  recursos: z
    .array(
      z.object({
        idRecurso: z.number().optional(),
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

        disponibilidad: z
          .object(
            {
              value: z
                .string()
                .min(1, "La disponibilidad es requerida")
                .optional(),
              label: z
                .string()
                .min(1, "El nombre de la disponibilidad es requerido")
                .optional(),
            },
            {
              message: "Disponibilidad inválida",
            }
          )
          .optional(),

        precio: z.string().min(0, "El precio es requerido"),
      })
    )
    .min(1, {
      message: "Debe seleccionar al menos un empleado",
    }),
});
