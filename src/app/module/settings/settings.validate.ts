import { z } from "zod";

const createSettingValidationSchema = z.object({
  body: z.object({
    site_name: z.string(),
    contact_email: z.string(),
  }),
});
const updateSettingValidationSchema = z.object({
  body: z.object({
    site_name: z.string().optional(),
    site_description: z.string().optional(),
    contact_email: z.string().optional(),
    twitter: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

export const settingValidations = {
  createSettingValidationSchema,
  updateSettingValidationSchema,
};
