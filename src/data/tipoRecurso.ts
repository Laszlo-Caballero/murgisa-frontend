import { TipoRecurso } from "@/interfaces/response.interface";

export const tipoRecursoData: TipoRecurso[] = [
{
    idTipoRecurso: 1,
    nombre: "Herramienta",
    descripcion: "Instrumentos utilizados para realizar trabajos manuales o técnicos.",
    total: 36,
    proveedorTotal: 5,
    estado: true
},
{
    idTipoRecurso: 2,
    nombre: "Maquinaria",
    descripcion: "Equipos mecánicos utilizados en procesos industriales o de construcción.",
    total: 25,
    proveedorTotal: 8,
    estado: true
},
{
    idTipoRecurso: 3,
    nombre: "Material",
    descripcion: "Insumos necesarios para la producción o ejecución de tareas.",
    total: 48,
    proveedorTotal: 12,
    estado: true
},
{
    idTipoRecurso: 4,
    nombre: "Vehículo",
    descripcion: "Medios de transporte asignados para tareas logísticas o de campo.",
    total: 8,
    proveedorTotal: 6,
    estado: false
}
]