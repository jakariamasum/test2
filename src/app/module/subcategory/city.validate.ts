import { z } from "zod";

const createCitySchemaValidation = z.object({
  body: z.object({
    title: z.string(),
  }),
});
const updateCitySchemaValidation = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const cityValidations = {
  createCitySchemaValidation,
  updateCitySchemaValidation,
};
