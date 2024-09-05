import { z } from "zod";
export const FiledsSchema = z.object({
  value: z.string(),
  label: z.string(),
});
export const updateFiledsSchema = z.object({
  value: z.string().optional(),
  label: z.string().optional(),
});
const SectionDataSchema = z.object({
  backgroundColor: z.string().optional(),
  desktopGrid: z.string().optional(),
  box: z.string().optional(),
  categories: z.array(FiledsSchema),
});
const updateSectionDataSchema = z.object({
  backgroundColor: z.string().optional(),
  desktopGrid: z.string().optional(),
  box: z.string().optional(),
  categories: z.array(updateFiledsSchema).optional(),
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
