import { Cargo } from "@/interfaces/response.interface";

export const cargoData: Cargo[] =[
{
    idCargo: 1,
    cargo: "Operador de Excavadora",
    descripcion: "Encargado de manejar maquinaria pesada para excavaciones",
    estado: true,
    totalUsuario: 8
},
{
    idCargo: 2,
    cargo: "Técnico de Mantenimiento",
    descripcion: "Responsable del mantenimiento preventivo y correctivo de maquinaria",
    estado: true,
    totalUsuario: 5
},
{
    idCargo: 3,
    cargo: "Supervisor de Obra",
    descripcion: "Supervisa las actividades en el sitio de trabajo y coordina al personal",
    estado: true,
    totalUsuario: 3
},
{
    idCargo: 4,
    cargo: "Chofer de Volquete",
    descripcion: "Transporta materiales y maquinaria en vehículos pesados",
    estado: false,
    totalUsuario: 2
},
{
    idCargo: 5,
    cargo: "Asistente Logístico",
    descripcion: "Apoya en la planificación y distribución de recursos y equipos",
    estado: true,
    totalUsuario: 4
}
]