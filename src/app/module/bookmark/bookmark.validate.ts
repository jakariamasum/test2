import { z } from "zod";

const createBookmarkValidationSchema = z.object({
  body: z.object({
    user_id: z.string(),
    news_id: z.string(),
  }),
});
const updateBookmarkValidationSchema = z.object({
  body: z.object({
    user_id: z.string().optional(),
    news_id: z.string().optional(),
  }),
});

export const bookmarkValidations = {
  createBookmarkValidationSchema,
  updateBookmarkValidationSchema,
};
