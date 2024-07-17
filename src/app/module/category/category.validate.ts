import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});
const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    parent_category_id: z.string().optional(),
  }),
});

export const categoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
