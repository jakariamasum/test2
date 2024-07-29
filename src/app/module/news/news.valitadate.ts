import { z } from "zod";

const createNewsValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    author_id: z.string(),
    category_id: z.string(),
    page_tag: z.string().min(1),
    status: z.string().default("draft"),
    views: z.number().int().default(0),
    likes: z.number().int().default(0),
    dislikes: z.number().int().default(0),
  }),
});
const updateNewsValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    summary: z.string().optional(),
    author_id: z.string().optional(),
    category_id: z.string().optional(),
    page_tag: z.string().min(1).optional(),
    status: z.string().optional(),
    views: z.number().int().optional(),
    likes: z.number().int().optional(),
    dislikes: z.number().int().optional(),
    language_id: z.string().optional(),
  }),
});

export const newsValidations = {
  createNewsValidationSchema,
  updateNewsValidationSchema,
};
