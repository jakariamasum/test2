import { z } from "zod";

const SectionDataSchema = z.object({
  sectionTitle: z.string(),
  backgroundColor: z.string().optional(),
  desktopGrid: z.string().optional(),
  box: z.string().optional(),
});

// Zod schema for RowData
const RowDataSchema = z.object({
  color: z.string().optional(),
  backgroundColor: z.string().optional(),
  index: z.number().optional(),
  sections: z.array(SectionDataSchema).optional(),
});

const createPageValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    img: z.string().optional(),
    rows: z.array(RowDataSchema).optional(),
    language: z.string(),
    path: z.string(),
  }),
});

const updatePageValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    img: z.string().optional(),
    rowData: RowDataSchema.optional(),
  }),
});

export const pageValidations = {
  createPageValidationSchema,
  updatePageValidationSchema,
};
