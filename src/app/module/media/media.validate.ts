import { z } from "zod";

const createMediaValidationSchema = z.object({
  body: z.object({
    news_id: z.string(),
    media_type: z.string(),
    url: z.string(),
  }),
});
const updateMediaValidationSchema = z.object({
  body: z.object({
    news_id: z.string().optional(),
    media_type: z.string().optional(),
    url: z.string().optional(),
    caption: z.string().optional(),
  }),
});
export const mediaValidations = {
  createMediaValidationSchema,
  updateMediaValidationSchema,
};
