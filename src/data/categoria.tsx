import { Categoria } from "@/interfaces/response.interface";

export const categoriaData: Categoria[] = [
    {
        idCategoria: 1,
        nombre: "Mantenimiento",
        descripcion: "Servicios de mantenimiento preventivo y correctivo.",
        serviciosActivos: 12,
        ingresosMes: 4500,
        estado: true
    },
    {
        idCategoria: 2,
        nombre: "Instalaciones",
        descripcion: "Instalación de equipos, sistemas eléctricos y redes.",
        serviciosActivos: 8,
        ingresosMes: 3200,
        estado: true
    },
    {
        idCategoria: 3,
        nombre: "Consultoría",
        descripcion: "Asesoría técnica y diagnósticos especializados.",
        serviciosActivos: 5,
        ingresosMes: 2800,
        estado: false
    },
    {
        idCategoria: 4,
        nombre: "Soporte técnico",
        descripcion: "Atención a clientes y resolución de incidentes.",
        serviciosActivos: 10,
        ingresosMes: 3900,
        estado: true
    },
    {
        idCategoria: 5,
        nombre: "Capacitación",
        descripcion: "Cursos y talleres para clientes y personal técnico.",
        serviciosActivos: 3,
        ingresosMes: 1500,
        estado: false
    }
]