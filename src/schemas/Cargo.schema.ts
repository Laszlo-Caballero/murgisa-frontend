import { z } from "zod";

export const CargoSchema = z.object({
    cargo: z.string().min(1, "El cargo es requerido"),
    descripcion: z.string().min(1, "La descripcion es requerida"),
})