import { z } from "zod";
import { Personal, Servicio } from "./responsefinal.interface";
import { ServicioSchema } from "@/schemas/Servicio.schema";

export interface StepOne {
  tipoServicio: {
    label: string;
    value: string;
  };
  fechaVenta: string;
}

export interface Cliente {
  telefono: string;
  razonSocial: string;
  ruc: string;
  idCliente: number;
  ciudad: Ciudad;
  correo: string;
  direccion: string;
  dni: string;
  nombre: string;
  fechaNacimiento: string;
}

export interface Ciudad {
  value: string;
  label: string;
}

export interface StepThree {
  servicios: z.infer<typeof ServicioSchema>[];
}

export interface StepFour {
  personal: Personal[];
}

export interface VentaSteps {
  stepOne: StepOne;
  stepTwo: Cliente;
  stepThree: StepThree;
  stepFour: StepFour;
}
