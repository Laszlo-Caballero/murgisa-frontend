import { z } from "zod";
import { ServicioSchema } from "@/schemas/Servicio.schema";
import { PersonalSchema } from "@/schemas/Personal.schema";
import { RecursoSchema } from "@/schemas/Recurso.schema";

export interface StepOne {
  tipoServicio: {
    label: string;
    value: string;
  };
  fechaVenta: string;
  fechaInicio: string;
  fechaFin: string;
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

const Personal = PersonalSchema.extend({
  idPersonal: z.number().optional(),
});

const Recurso = RecursoSchema.extend({
  idRecurso: z.number().optional(),
});

const Servicio = ServicioSchema.extend({
  idServicio: z.number().optional(),
});

export interface Ciudad {
  value: string;
  label: string;
}

export interface StepThree {
  servicios: z.infer<typeof Servicio>[];
}

export interface StepFour {
  recurso: z.infer<typeof Recurso>[];
}
export interface StepFive {
  personal: z.infer<typeof Personal>[];
}

export interface StepSix {
  formaPagoId: number;
  nombre: string;
}

export interface VentaSteps {
  stepOne: StepOne;
  stepTwo: Cliente;
  stepThree: StepThree;
  stepFour: StepFour;
  stepFive: StepFive;
  stepSix: StepSix;
}
