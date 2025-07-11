import { z } from "zod";

export const TipoRecursoSchema= z.object({
    nombre: z.string().min(1, "El nombre es requerido"),
    descripcion: z.string().min(1, "La descripción es requerida"),
})