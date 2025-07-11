import { z } from "zod";
import { ServicioSchema } from "../Servicio.schema";

export const StepFourSchema = z.object({
  persona: z
    .array(
      ServicioSchema.extend({
        idServicio: z.number().optional(),
      })
    )
    .min(1, {
      message: "Debe seleccionar al menos un servicio",
    }),
});
