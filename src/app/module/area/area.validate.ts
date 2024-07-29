import { z } from "zod";

const createAreaSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    city: z.string(),
  }),
});
const updateAreaSchemaValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    city: z.string().optional(),
  }),
});

export const areaValidations = {
  createAreaSchemaValidation,
  updateAreaSchemaValidation,
};
