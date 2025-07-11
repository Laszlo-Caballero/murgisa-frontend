import { z } from "zod";
import { ServicioSchema } from "../Servicio.schema";
import { PersonalSchema } from "../Personal.schema";

export const StepFiveSchema = z.object({
  persona: z
    .array(
      PersonalSchema.extend({
        idPersonal: z.number().optional(),
      })
    )
    .min(1, {
      message: "Debe seleccionar al menos un empleado",
    }),
});
