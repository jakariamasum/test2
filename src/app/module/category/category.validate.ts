import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    lang: z.string(),
    type: z.string().optional(),
  }),
});
const updateCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
    img: z.string().optional(),
    position: z.number().optional(),
    type: z.string().optional(),
  }),
});

export const categoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
