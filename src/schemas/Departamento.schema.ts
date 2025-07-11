import { z } from "zod";

export const DepartamentoSchema = z.object({
    titulo:  z.string().min(1, "El nombre es requerido"),
    descripcion:  z.string().min(1, "La descripción es requerida"),
    presupuesto:  z.string().min(1, "El presupuesto es requerido"),
});