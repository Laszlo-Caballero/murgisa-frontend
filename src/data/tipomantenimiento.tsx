import { TipoMantenimiento } from "@/interfaces/response.interface";

export const tipoMantenimientoData: TipoMantenimiento[] = [
{
    idTipoMantenimiento: 1,
    nombre: "Mantenimiento estacional",
    descripcion: "Se realiza en temporadas específicas para adaptar los equipos al clima.",
    duracion: "2 horas",
    total: 16,
    estado: true
},
{
    idTipoMantenimiento: 2,
    nombre: "Mantenimiento de actualización",
    descripcion: "Consiste en actualizar software, firmware o componentes tecnológicos.",
    duracion: "3 horas",
    total: 28,
    estado: true
},
{
    idTipoMantenimiento: 3,
    nombre: "Mantenimiento predictivo",
    descripcion: "Se basa en el monitoreo de condiciones para anticipar fallos.",
    duracion: "3 horas",
    total: 12,
    estado: true
},
{
    idTipoMantenimiento: 4,
    nombre: "Mantenimiento rutinario",
    descripcion: "Actividades básicas y frecuentes como limpieza o ajustes.",
    duracion: "1 hora",
    total: 20,
    estado: true
},
{
    idTipoMantenimiento: 5,
    nombre: "Mantenimiento de emergencia",
    descripcion: "Intervención inmediata ante fallas críticas de los equipos.",
    duracion: "5 horas",
    total: 10,
    estado: true
}]