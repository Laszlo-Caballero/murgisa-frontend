import { FormaPago } from "@/interfaces/response.interface";

export const formaPagoData: FormaPago[] =[
{
    idFormaPago: 1,
    tipo: "Efectivo",
    descripcion: "Pago directo en moneda local sin intermediarios",
    comision: 0,
    estado: true,
    registeredAt: "2025-06-16T09:00:00Z"
},
{
    idFormaPago: 2,
    tipo: "Tarjeta de Crédito",
    descripcion: "Pago mediante tarjetas Visa, MasterCard u otras",
    comision: 2.5,
    estado: true,
    registeredAt: "2025-06-10T14:30:00Z"
},
{
    idFormaPago: 3,
    tipo: "Transferencia Bancaria",
    descripcion: "Depósito o transferencia interbancaria a cuenta de la empresa",
    comision: 0.5,
    estado: true,
    registeredAt: "2025-05-25T12:15:00Z"
},
{
    idFormaPago: 4,
    tipo: "Yape / Plin",
    descripcion: "Pago rápido vía apps de billetera móvil",
    comision: 0,
    estado: false,
    registeredAt: "2025-06-01T16:00:00Z"
},
{
    idFormaPago: 5,
    tipo: "Pago Contraentrega",
    descripcion: "El pago se realiza al momento de la entrega del servicio o producto",
    comision: 0,
    estado: true,
    registeredAt: "2025-06-12T10:45:00Z"
}
]