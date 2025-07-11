import { z } from "zod";

export const ClienteSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  correo: z.string().email("Correo electrónico inválido"),
  direccion: z.string().min(1, "La dirección es requerida"),
  dni: z
    .string()
    .min(8, "El DNI es requerido")
    .max(8, "El DNI debe tener 8 dígitos"),
  telefono: z
    .string()
    .min(9, "El teléfono es requerido")
    .max(9, "El teléfono debe tener 9 dígitos"),
  ciudad: z.object(
    {
      value: z.string().min(1, "La ciudad es requerida"),
      label: z.string().min(1, "El nombre de la ciudad es requerido"),
    },
    {
      message: "Ciudad inválida",
    }
  ),
  fechaNacimiento: z.string().min(1, "La fecha de nacimiento es requerida"),
  razonSocial: z.string().min(1, "La razón social es requerida"),
  ruc: z
    .string()
    .min(11, "El RUC debe tener 11 caracteres")
    .max(11, "El RUC no debe exceder los 11 caracteres"),
});
