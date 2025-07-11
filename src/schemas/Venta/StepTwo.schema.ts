import { z } from "zod";
import { ClienteSchema } from "../Cliente.schema";

export const StepTwoSchema = ClienteSchema.extend({
  idCliente: z.number(),
});
