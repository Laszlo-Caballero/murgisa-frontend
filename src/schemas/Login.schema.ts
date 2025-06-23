import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ message: "El correo electrónico es obligatorio" })
    .email({ message: "Correo electrónico inválido" })
    .min(1, { message: "El correo electrónico es obligatorio" }),
  password: z
    .string({ message: "La contraseña es obligatoria" })
    .min(3, { message: "La contraseña debe tener al menos 3 caracteres" }),
});
