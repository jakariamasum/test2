import { z } from "zod";

const createSubCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    lang: z.string(),
  }),
});
const updateSubCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    img: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
  }),
});

export const SubCategoryValidations = {
  createSubCategoryValidationSchema,
  updateSubCategoryValidationSchema,
};
