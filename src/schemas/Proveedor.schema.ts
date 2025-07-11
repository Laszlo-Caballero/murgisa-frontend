import {z} from "zod";

export const ProveedorSchema = z.object({
    razonSocial: z.string().min(1,"La razon Social es requerida"),
    ruc: z.string().min(1,"El RUC es requerido").max(12,"El RUC debe tener 11 digitos"),
    nombreResponsable : z.string().min(1,"El nombre del responsable es requerido"),
    dni: z.string().min(1,"El dni es requerido").max(8,"El dni debe tener 8 digitos"),
    correo : z.string().email().min(1,"El correo es requerido"),
    telefono: z.string().min(1,"El telefono es requerido").max(9,"El telefono debe tener 9 digitos"),
})