import { z } from "zod";

export const TipoMantenimientoSchema= z.object({
    nombre: z.string().min(1, "El nombre es requerido"),
    descripcion: z.string().min(1, "La descripción es requerida"),
    duracion: z.string().min(1, "La duracion es requerida"),
})