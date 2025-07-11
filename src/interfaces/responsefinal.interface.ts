export interface Personal {
  idPersonal: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  sueldo: number;
  numeroDocumento: string;
  telefono: string;
  estado: boolean;
  fechaIngreso: string;
  cargo: Cargo;
  usuario: Usuario;
  profesion: Profesion;
  departamento: Departamento;
}

export interface Cargo {
  idCargo: number;
  cargo: string;
  descripcion: string;
  estado: boolean;
}

export interface Usuario {
  idUsuario: number;
  usuario: string;
  contrasena: string;
  correo: string;
}

export interface Profesion {
  idProfesion: number;
  titulo: string;
  estado: boolean;
  descripcion: string;
}

export interface Departamento {
  idDepartamento: number;
  titulo: string;
  descripcion: string;
  estado: boolean;
  presupuesto: number;
}

export interface Response<T> {
  message: string;
  status: number;
  data: T;
}
export interface Cliente {
  idCliente: number;
  nombre: string;
  ruc: string;
  dni: string;
  correo: string;
  telefono: string;
  razonSocial: string;
  direccion: string;
  fechaNacimiento: string;
  estado: boolean;
  ciudad: Ciudad;
}

export interface Ciudad {
  idCiudad: number;
  nombre: string;
}

export interface Disponibilidad {
  disponibilidadId: number;
  disponibilidad: string;
}

export interface Recurso {
  idRecurso: number;
  nombre: string;
  precio: number;
  estado: boolean;
  tipoRecurso: TipoRecurso;
  proveedor: Proveedor;
  disponibilidad: Disponibilidad;
}

export interface TipoRecurso {
  idTipoRecurso: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

export interface Proveedor {
  idProovedor: number;
  razonSocial: string;
  ruc: string;
  nombreResponsable: string;
  dniResponsable: string;
  correo: string;
  telefono: string;
  estado: boolean;
}

export interface Servicio {
  idServicio: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  estado: boolean;
  precio: number;
  tipoServicio: TipoServicio;
}

export interface Departamento {
  idDepartamento: number;
  titulo: string;
  descripcion: string;
  estado: boolean;
  presupuesto: number;
}

export interface TipoServicio {
  idTipoServicio: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

export interface Cargo {
  idCargo: number;
  cargo: string;
  descripcion: string;
  estado: boolean;
}
export interface MantenimientoPreventivo {
  mantenimientoPreventivoId: number
  fechaMantenimiento: string
  prioridad: string
  estado: boolean
  tipo: Tipo[]
  recurso: Recurso
  personal: Personal
  horario: Horario
}

export interface Tipo {
  tipoMantenimientoId: number
  nombre: string
  descripcion: string
  duracion: string
}

export interface Horario {
  idhorario: number
  horaInicio: string
  horaFin: string
  estado: boolean
}
