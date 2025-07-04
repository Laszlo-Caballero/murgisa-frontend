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
