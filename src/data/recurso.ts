import { Recurso } from "@/interfaces/response.interface";

export const recursoData: Recurso[] =[
{
    idRecurso: 1,
    nombre: "Cemento",
    tipo: "Material",
    precio: 1200.00,
    disponibilidad: "Disponible",
    proveedor: "Makita",
    proveedorResponsable: "Jose Cardozo",
    estado: true
},
{
    idRecurso: 2,
    nombre: "Sierra circular",
    tipo: "Herramienta eléctrica",
    precio: 230.00,
    disponibilidad: "En mantenimiento",
    proveedor: "Bosch",
    proveedorResponsable: "Alexandra Peralta",
    estado: true
},
{
    idRecurso: 3,
    nombre: "Compresor de aire",
    tipo: "Maquinaria",
    precio: 750.00,
    disponibilidad: "Disponible",
    proveedor: "Stanley",
    proveedorResponsable: "Rodrigo Arteaga",
    estado: true
},
{
    idRecurso: 4,
    nombre: "Generador portátil",
    tipo: "Maquinaria",
    precio: 900.00,
    disponibilidad: "Alquilado",
    proveedor: "Honda",
    proveedorResponsable: "Lucía Santos",
    estado: true
},
{
    idRecurso: 5,
    nombre: "Amoladora angular",
    tipo: "Herramienta eléctrica",
    precio: 180.00,
    disponibilidad: "Disponible",
    proveedor: "DeWalt",
    proveedorResponsable:"Tomás Herrera",
    estado: true
}
]