import { z } from "zod";

const languageValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    language_code: z.string(),

    language_type: z.enum(["0", "1"]).default("1"),
  }),
});
const updateLanguageValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    language_code: z.string().optional(),
    language_type: z.enum(["0", "1"]).default("1").optional(),
  }),
});

export const languageValidations = {
  languageValidationSchema,
  updateLanguageValidationSchema,
};
