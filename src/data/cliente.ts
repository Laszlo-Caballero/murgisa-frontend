import { Cliente } from "@/interfaces/response.interface";

export const clienteData: Cliente[] = [
{
    idCliente: 1,
    nombre: "Juan Pérez",
    dni: "75896324",
    correo: "juan.perez@example.com",
    telefono: "987654321",
    direccion: "Av. Las Industrias 123",
    fechaNacimiento: "1985-04-15",
    razonSocial: "Pérez Maquinarias SAC",
    estado: true,
    ciudad: { idCiudad: 1, nombre: "Lima" }
},
{
    idCliente: 2,
    nombre: "María Fernández",
    dni: "80123456",
    correo: "maria.fernandez@example.com",
    telefono: "912345678",
    direccion: "Jr. Amazonas 456",
    fechaNacimiento: "1990-08-22",
    razonSocial: "Fernández Equipos EIRL",
    estado: true,
    ciudad: { idCiudad: 2, nombre: "Arequipa" }
},
{
    idCliente: 3,
    nombre: "Carlos Gómez",
    dni: "71234567",
    correo: "carlos.gomez@example.com",
    telefono: "956789012",
    direccion: "Calle Los Andes 789",
    fechaNacimiento: "1978-11-05",
    razonSocial: "Gómez Construcciones",
    estado: false,
    ciudad: { idCiudad: 3, nombre: "Trujillo" }
},
{
    idCliente: 4,
    nombre: "Ana Torres",
    dni: "76543210",
    correo: "ana.torres@example.com",
    telefono: "934567890",
    direccion: "Av. El Sol 321",
    fechaNacimiento: "1987-02-19",
    razonSocial: "Torres Servicios Industriales",
    estado: true,
    ciudad: { idCiudad: 1, nombre: "Lima" }
},
{
    idCliente: 5,
    nombre: "Luis Rojas",
    dni: "70987654",
    correo: "luis.rojas@example.com",
    telefono: "923456789",
    direccion: "Prolongación Grau 654",
    fechaNacimiento: "1993-07-30",
    razonSocial: "Rojas y Asociados SAC",
    estado: false,
    ciudad: { idCiudad: 4, nombre: "Chiclayo" }
}
]