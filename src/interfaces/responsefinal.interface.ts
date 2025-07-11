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
  mantenimientoPreventivoId: number;
  fechaMantenimiento: string;
  prioridad: string;
  estado: boolean;
  tipo: Tipo[];
  recurso: Recurso;
  personal: Personal;
  horario: Horario;
}

export interface Tipo {
  tipoMantenimientoId: number;
  nombre: string;
  descripcion: string;
  duracion: string;
}

export interface Horario {
  idhorario: number;
  horaInicio: string;
  horaFin: string;
  estado: boolean;
}

export interface FormaPago {
  idFormaPago: number;
  tipo: string;
  descripcion: string;
  comision: number;
  estado: boolean;
  registeredAt: string;
}

export interface Venta {
  idVenta: number;
  fechaInicioServicio: string;
  fechaFFinServicio: string;
  fechaVenta: string;
  estado: boolean;
  asignacionPersonal: AsignacionPersonal[];
  cliente: Cliente;
  servicios: Servicio[];
  pagos: Pago[];
  notasSalida: any[]; //TODO: Actualizar con el tipo correcto
  detalleVenta: DetalleVenta[];
}

export interface AsignacionPersonal {
  idAsignacionPersonal: number;
  costo: number;
  estado: boolean;
  personal: Personal;
}

export interface Pago {
  idPagoServicio: number;
  fecha: string;
  estado: boolean;
  formaPago: FormaPago;
}

export interface DetalleVenta {
  idDetalleVenta: number;
  precio: number;
  estado: boolean;
  recurso: Recurso;
}

export interface TipoMantenimiento {
  tipoMantenimientoId: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  estado: boolean;
}

export interface Log {
  idLog: number;
  tipo: string;
  mensaje: string;
  fecha: string;
}
export interface MantenimientoCorrectivo {
  mantenimientoCorrectivoId: number;
  fechaInicio: string;
  precio: number;
  estado: boolean;
  tipo: TipoMantenimiento[];
  recurso: Recurso;
  personal: Personal;
}

export interface NotaSalida {
  idNotaSalida: number;
  estado: boolean;
  fecha: string;
  venta: Venta;
  recurso: Recurso;
}
