import { z } from "zod";

const languageValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    language_code: z.string(),

    language_type: z.enum(["0", "1"]).default("1"),
  }),
});

export const languageValidations = {
  languageValidationSchema,
};
