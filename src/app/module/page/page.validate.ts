import { z } from "zod";

const createPageValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    tags: z.any(),
    layout_type: z.string(),
    rows: z.number(),
    columns_per_row: z.any(),
  }),
});

const updatePageValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    tag: z.string().optional(),
    description: z.string().optional(),
    layout_type: z.string().optional(),
    rows: z.number().optional(),
    columns_per_row: z.any().optional(),
  }),
});

export const pageValidations = {
  createPageValidationSchema,
  updatePageValidationSchema,
};
