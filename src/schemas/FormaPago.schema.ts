import { z } from "zod";

export const FormaPagoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  descripcion: z.string().min(1, "La descripción es requerida"),
  comision: z
    .string({
      message: "La comisión es requerida",
    })
    .min(1, "La comisión es requerida"),
});
