import { VentasRecientes } from "@/interfaces/response.interface";

export const ventasRecientes: VentasRecientes[] = [
  {
    idVenta: 1,
    cliente: "Juan Pérez",
    fecha: "2023-10-01T12:00:00Z",
    monto: 150.75,
    estado: "Completada",
    titulo: "Venta de productos electrónicos",
  },
  {
    idVenta: 2,
    cliente: "María López",
    fecha: "2023-09-28T15:30:00Z",
    monto: 200.0,
    estado: "Pendiente",
    titulo: "Venta de ropa",
  },
  {
    idVenta: 3,
    cliente: "Carlos García",
    fecha: "2023-09-25T10:15:00Z",
    monto: 99.99,
    estado: "Cancelada",
    titulo: "Venta de muebles",
  },
];
