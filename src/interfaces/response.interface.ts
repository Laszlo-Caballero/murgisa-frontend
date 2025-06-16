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
  telefono: string;
  estado: boolean;
  fechaIngreso: string;
  cargo: Cargo;
  profesion: Profesion;
  usuario?: Usuario;
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