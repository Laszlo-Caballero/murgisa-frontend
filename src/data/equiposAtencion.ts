import { EquiposAtencion } from "@/interfaces/response.interface";

export const equiposAtencion: EquiposAtencion[] = [
  {
    idEquipo: 1,
    nombre: "Equipo de Mantenimiento",
    estado: "Alta",
    ultimoMantenimiento: "2023-10-01T12:00:00Z",
  },
  {
    idEquipo: 2,
    nombre: "Equipo de Ventas",
    estado: "Baja",
    ultimoMantenimiento: "2023-09-15T12:00:00Z",
  },
  {
    idEquipo: 3,
    nombre: "Equipo de Soporte Técnico",
    estado: "Critica",
    ultimoMantenimiento: "2023-08-30T12:00:00Z",
  },
];
