import { z } from "zod";

const createSettingValidationSchema = z.object({
  body: z.object({
    metaDescription: z.string().optional(),
    description: z.string().optional(),
    privacy: z.string().optional(),
    terms: z.string().optional(),
    logo: z.string().optional(),
    favicon: z.string().optional(),
    lotoImg: z.string().optional(),
    metaImg: z.string().optional(),
    title: z.string().optional(),
    bgColor: z.string().optional(),
    copyright: z.string().optional(),
    content: z.string().optional(),
  }),
});
const updateSettingValidationSchema = z.object({
  body: z.object({
    metaDescription: z.string().optional(),
    description: z.string().optional(),
    privacy: z.string().optional(),
    terms: z.string().optional(),
    logo: z.string().optional(),
    favicon: z.string().optional(),
    lotoImg: z.string().optional(),
    metaImg: z.string().optional(),
    title: z.string().optional(),
    bgColor: z.string().optional(),
    copyright: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const settingValidations = {
  createSettingValidationSchema,
  updateSettingValidationSchema,
};
