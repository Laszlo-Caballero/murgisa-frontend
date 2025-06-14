import { Servicio } from "@/interfaces/response.interface"

export const servicioData: Servicio[] = [{
    idServicio: 1,
    titulo: "Instalación de Equipos Nuevos",
    descripcion: "Instalación profesional y puesta en marcha de equipos industriales",
    categoria: "Instalación",
    precio: 450.00,
    duracion: "7 días",
    cantVentas: 12,
    estado: true
},
{
    idServicio: 2,
    titulo: "Mantenimiento Preventivo",
    descripcion: "Revisión periódica para asegurar el funcionamiento de los equipos",
    categoria: "Mantenimiento",
    precio: 300.00,
    duracion: "3 días",
    cantVentas: 25,
    estado: true
},
{
    idServicio: 3,
    titulo: "Reparación de Equipos",
    descripcion: "Diagnóstico y reparación de fallas en maquinaria industrial",
    categoria: "Reparación",
    precio: 550.00,
    duracion: "5 días",
    cantVentas: 8,
    estado: true
},
{
    idServicio: 4,
    titulo: "Capacitación Técnica",
    descripcion: "Entrenamiento especializado para el uso y mantenimiento de los equipos",
    categoria: "Capacitación",
    precio: 200.00,
    duracion: "2 días",
    cantVentas: 15,
    estado: true
},
{
    idServicio: 5,
    titulo: "Desinstalación de Equipos Antiguos",
    descripcion: "Desmontaje y retiro seguro de equipos obsoletos o en desuso",
    categoria: "Desinstalación",
    precio: 250.00,
    duracion: "2 días",
    cantVentas: 6,
    estado: true
}
]