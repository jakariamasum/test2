import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string(),
  }),
});
const updateCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    parent_category_id: z.string().optional(),
    img: z.string().optional(),
    position: z.number().optional(),
  }),
});

export const categoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
