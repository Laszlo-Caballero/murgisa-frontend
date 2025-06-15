import { PlanificacionPreventivo } from "@/interfaces/response.interface";

export const preventivoData: PlanificacionPreventivo[] = [{
    idPlanificacion: 1,
    tipo: "Mantenimiento eléctrico",
    responsable: "Carlos Pérez",
    cantPersonal: 3,
    fecha: new Date("2025-07-01"),
    horario: "08:00 - 12:00",
    prioridad: "Alta",
    estado: true
},
{
    idPlanificacion: 2,
    tipo: "Revisión de maquinaria",
    responsable: "Lucía Ramírez",
    cantPersonal: 2,
    fecha: new Date("2025-07-05"),
    horario: "13:00 - 17:00",
    prioridad: "Media",
    estado: false
},
{
    idPlanificacion: 3,
    tipo: "Cambio de filtros HVAC",
    responsable: "Miguel Torres",
    cantPersonal: 4,
    fecha: new Date("2025-07-10"),
    horario: "09:00 - 14:00",
    prioridad: "Baja",
    estado: true
}]