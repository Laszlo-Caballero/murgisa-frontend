import { z } from "zod";

export const ProfesionSchema = z.object({
  titulo: z
    .string({
      message: "El título de la profesión es obligatorio",
    })
    .min(3, {
      message: "El título debe tener al menos 3 caracteres",
    }),
  descripcion: z
    .string({
      message: "La descripción de la profesión es obligatoria",
    })
    .min(10, {
      message: "La descripción debe tener al menos 10 caracteres",
    }),
});
