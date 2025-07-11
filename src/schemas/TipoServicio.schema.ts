import { z } from "zod";

export const TipoServicioSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre no puede exceder los 50 caracteres"),
  descripcion: z
    .string()
    .max(200, "La descripción no puede exceder los 200 caracteres"),
});
