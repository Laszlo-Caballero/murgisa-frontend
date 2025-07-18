export interface Cliente {
  idCliente: number;
  nombre: string;
  dni: string;
  correo: string;
  telefono: string;
  direccion: string;
  fechaNacimiento: string;
  razonSocial: string;
  estado: boolean;
  ciudad: Ciudad;
}

export interface Profesion {
  idProfesion: number;
  titulo: string;
  descripcion: string;
  cantidad: number;
  estado: boolean;
}

export interface Ciudad {
  idCiudad: number;
  nombre: string;
}

export interface FormaPago {
  idFormaPago: number;
  tipo: string;
  descripcion: string;
  comision: number;
  estado: boolean;
  registeredAt: string;
}

export interface Departamento {
  idDepartamento: number;
  titulo: string;
  descripcion: string;
  estado: boolean;
  empleados: number;
  presupuesto: number;
}

export interface Servicio {
  idServicio: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  precio: number;
  duracion: string;
  cantVentas: number;
  estado: boolean;
}
export interface Cargo {
  idCargo: number;
  cargo: string;
  descripcion: string;
  estado: boolean;
  totalUsuario: number;
}

export interface ResponseCargo {
  cargos: Cargo[];
  total: number;
  activos: number;
  usuarios: number;
}

export interface Usuario {
  idUsuario: number;
  usuario: string;
  contrasena: string;
  correo: string;
}

export interface Personal {
  idPersonal: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  sueldo: number;
  numeroDocumento: string;
  correo: string;
  telefono: string;
  estado: boolean;
  fechaIngreso: string;
  cargo: string;
  profesion: string;
  usuario?: string;
}

export interface Categoria {
  idCategoria: number;
  nombre: string;
  descripcion: string;
  serviciosActivos: number;
  ingresosMes: number;
  estado: boolean;
}

export interface PlanificacionPreventivo {
  idPlanificacion: number;
  tipo: string;
  recurso: string;
  responsable: string;
  cantPersonal: number;
  progreso: string;
  fecha: Date;
  horario: string;
  prioridad: string;
  estado: boolean;
}

export interface ActividadesRecientes {
  titulo: string;
  descripcion: string;
  tipo: "venta" | "administracion" | "mantenimiento" | "servicio" | "recursos";
  fecha: string;
}

export interface EquiposAtencion {
  estado: "Alta" | "Media" | "Baja" | "Critica";
  ultimoMantenimiento: string;
  nombre: string;
  idEquipo: number;
}

export interface Venta{
  idVenta: number,
  cliente: string,
  servicio: string,
  personal: string,
  recurso: string,
  monto: number,
  formaPago: string,
  fecha: string,
  estado: boolean,
}

export interface VentasRecientes {
  idVenta: number;
  titulo: string;
  fecha: string;
  monto: number;
  cliente: string;
  estado: "Pendiente" | "Completada" | "Cancelada";
}
export interface TipoMantenimiento {
  idTipoMantenimiento: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  total: number;
  estado: boolean;
}

export interface Recurso{
  idRecurso: number;
  nombre: string;
  tipo: string;
  precio: number;
  disponibilidad: string;
  proveedor: string;
  proveedorResponsable: string;
  estado: boolean;
}

export interface TipoRecurso {
  idTipoRecurso: number;
  nombre: string;
  descripcion: string;
  total: number;
  proveedorTotal: number;
  estado: boolean;
}

export interface Proveedor{
  idProveedor: string;
  razSocial: string;
  ruc: string;
  responsable: string;
  tipoRecurso: string;
  dni: string;
  email: string;
  ultimaCompra: Date;
  estado: boolean;
}
export interface NotaSalida {
  idNotaSalida: number,
  idOrdenServicio: number,
  fecha: string,
  maquinariaSeleccionada: string,
  ordenServicio?: string,
  cliente?: string
  estado: boolean,
}

export interface Condicion {
  idCondicion: number
  nombre: string
  estado: boolean
  descripcion: string
}
export interface NotaEntrada{
  idNotaEntrada: number,
  proveedor: string,
  ruc: string,
  item: string,
  cantidad: number;
  monto: number,
  progreso: string,
  fecha: string,
  estado: boolean,
}

export interface Correctivo{
  idCorrectivo: number;
  tipo: string;
  descripcion: string;
  maquinaria: string;
  responsable: string;
  cantTecnicos: number;
  progreso: string;
  duracion: string;
  precio: number;
  fecha: string;
  estado: boolean;
}
