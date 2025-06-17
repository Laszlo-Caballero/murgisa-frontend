import { NotaEntrada } from "@/interfaces/response.interface";

export const notaEntradaData: NotaEntrada[] = [
{
    idNotaEntrada: 1,
    proveedor: "Ferretería Industrial SAC",
    ruc: "20123456789",
    item: "Tubos de acero",
    monto: 1250.50,
    progreso: "Recibido",
    fecha: "2025-06-14",
    estado: true
},
{
    idNotaEntrada: 2,
    proveedor: "Maquinarias del Sur",
    ruc: "20456789123",
    item: "Aceites",
    monto: 842.75,
    progreso: "En revisión",
    fecha: "2025-06-10",
    estado: true
},
{
    idNotaEntrada: 3,
    proveedor: "Suministros Pesados EIRL",
    ruc: "20567891234",
    item: "Llantas",
    monto: 1630.00,
    progreso: "Pendiente de recepción",
    fecha: "2025-06-05",
    estado: false
},
{
    idNotaEntrada: 4,
    proveedor: "Repuestos Norteños",
    ruc: "20345678901",
    item: "Rodamientos",
    monto: 590.25,
    progreso: "Completado",
    fecha: "2025-05-30",
    estado: true
},
{
    idNotaEntrada: 5,
    proveedor: "Importadora Andes",
    ruc: "20678912345",
    item: "Frenos",
    monto: 1395.80,
    progreso: "Cancelado",
    fecha: "2025-05-25",
    estado: false
}
]