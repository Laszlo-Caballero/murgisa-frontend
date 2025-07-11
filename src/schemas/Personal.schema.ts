import { z } from "zod";

export const PersonalSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  apellido_paterno: z.string().min(1, "El apellido es requerido"),
  apellido_materno: z.string().min(1, "El apellido es requerido"),
  sueldo: z
    .number({ message: "El sueldo es requerido" })
    .min(1, "El sueldo es requerido")
    .max(9999999, "El sueldo no puede ser mayor a 9,999,999"),
  numeroDocumento: z.string().length(8, "El DNI debe tener 8 dígitos"),
  telefono: z.string().min(1, "El teléfono es requerido"),
  fechaNacimiento: z.string().optional(),
  estado: z.boolean().default(true),
  cargo: z.object(
    {
      value: z.string().min(1, "El cargo es requerido"),
      label: z.string().min(1, "El cargo es requerido"),
    },
    {
      message: "El cargo es requerido",
    }
  ),
  departamento: z.object(
    {
      value: z.string().min(1, "El departamento es requerido"),
      label: z.string().min(1, "El departamento es requerido"),
    },
    {
      message: "El departamento es requerido",
    }
  ),
  profesion: z.object(
    {
      value: z.string().min(1, "La profesión es requerida"),
      label: z.string().min(1, "La profesión es requerida"),
    },
    {
      message: "La profesión es requerida",
    }
  ),
});
