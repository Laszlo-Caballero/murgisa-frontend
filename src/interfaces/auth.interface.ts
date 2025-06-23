export interface UserReponse {
  idUsuario: number;
  usuario: string;
  contrasena: string;
  correo: string;
  personal: Personal;
  token: string;
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
}
