import { z } from "zod";

const SectionSchema = z.object({
  section: z.string().optional(),
  index: z.number().optional(),
  backgroundColor: z.string().optional(),
  color: z.string().optional(),
  titleBackgroundColor: z.string().optional(),
  titleTextColor: z.string().optional(),
  sectionBackgroundColor: z.string().optional(),
  sectionTextColor: z.string().optional(),
  sectionStyle: z.string().optional(),
  sectionTitle: z.string().optional(),
  sectionName: z.string().optional(),
  desktopGrids: z.string().optional(),
  gridWidth: z.string().optional(),
  mobileGrids: z.string().optional(),
  limit: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  photoPosition: z.string().optional(),
  photoUrl: z.string().optional(),
});

export const RowDataSchema = z.object({
  id: z.number(),
  backgroundColor: z.string(),
  color: z.string(),
  sections: z.array(SectionSchema),
});

const createPageValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string().optional(),
    img: z.string().optional(),
    rowData: RowDataSchema.optional(),
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
