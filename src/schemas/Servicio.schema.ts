import { z } from "zod";

export const ServicioSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  descripcion: z.string().min(1, "La descripción es requerida"),
  precio: z
    .number()
    .min(0, "El precio debe ser mayor o igual a 0")
    .max(1000000, "El precio no puede ser mayor a 1,000,000"),
  duracion: z.string().min(1, "La duración es requerida"),
  tipoServicio: z.object(
    {
      value: z.string().min(1, "El ID del tipo de servicio es requerido"),
      label: z.string().min(1, "El nombre del tipo de servicio es requerido"),
    },
    {
      message: "El tipo de servicio es requerido",
    }
  ),
});
