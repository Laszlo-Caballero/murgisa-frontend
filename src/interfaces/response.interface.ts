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
