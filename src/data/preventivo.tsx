import { PlanificacionPreventivo } from "@/interfaces/response.interface";

export const preventivoData: PlanificacionPreventivo[] = [{
    idPlanificacion: 1,
    tipo: "Mantenimiento eléctrico",
    recurso: "Excavadora",
    responsable: "Carlos Pérez",
    cantPersonal: 3,
    progreso:"En progreso",
    fecha: new Date("2025-07-01"),
    horario: "08:00 - 12:00",
    prioridad: "Alta",
    estado: true
},
{
    idPlanificacion: 2,
    tipo: "Revisión de maquinaria",
    recurso: "Grúa",
    responsable: "Lucía Ramírez",
    cantPersonal: 2,
    progreso:"Pendiente",
    fecha: new Date("2025-07-05"),
    horario: "13:00 - 17:00",
    prioridad: "Media",
    estado: false
},
{
    idPlanificacion: 3,
    tipo: "Cambio de filtros HVAC",
    recurso: "Camión de carga",
    responsable: "Miguel Torres",
    cantPersonal: 4,
    progreso:"Completado",
    fecha: new Date("2025-07-10"),
    horario: "09:00 - 14:00",
    prioridad: "Baja",
    estado: true
},
{
    idPlanificacion: 4,
    tipo: "Inspección eléctrica",
    recurso: "Generador",
    responsable: "Ana Torres",
    cantPersonal: 1,
    progreso: "Completado",
    fecha: new Date("2025-07-10"),
    horario: "09:00 - 11:00",
    prioridad: "Baja",
    estado: true
}]