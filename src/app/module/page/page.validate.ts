import { z } from "zod";

const SectionDataSchema = z.object({
  sectionTitle: z.string(),
  backgroundColor: z.string().optional(),
  desktopGrid: z.string().optional(),
  box: z.string().optional(),
});
const updateSectionDataSchema = z.object({
  sectionTitle: z.string().optional(),
  backgroundColor: z.string().optional(),
  desktopGrid: z.string().optional(),
  box: z.string().optional(),
});

// Zod schema for RowData
const createRowDataSchema = z.object({
  color: z.string().optional(),
  backgroundColor: z.string().optional(),
  index: z.number().optional(),
  sections: z.array(SectionDataSchema).optional(),
});
const updateRowDataSchema = z.object({
  color: z.string().optional(),
  backgroundColor: z.string().optional(),
  index: z.number().optional(),
  sections: z.array(updateSectionDataSchema).optional(),
});

const createPageValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    img: z.string().optional(),
    rows: z.array(createRowDataSchema).optional(),
    language: z.string(),
    path: z.string(),
  }),
});

const updatePageValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    img: z.string().optional(),
    rows: z.array(updateRowDataSchema).optional(),
    language: z.string().optional(),
    path: z.string().optional(),
  }),
});

export const pageValidations = {
  createPageValidationSchema,
  updatePageValidationSchema,
};
