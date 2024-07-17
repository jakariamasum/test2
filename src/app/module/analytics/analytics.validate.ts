import { z } from "zod";

const createAnalyticsValidationSchema = z.object({
  body: z.object({
    news_id: z.string(),
    views: z.number(),
    likes: z.number(),
    dislikes: z.number(),
    comments_count: z.number(),
  }),
});
const updateAnalyticsValidationSchema = z.object({
  body: z.object({
    news_id: z.string().optional(),
    views: z.number().optional(),
    likes: z.number().optional(),
    dislikes: z.number().optional(),
    comments_count: z.number().optional(),
  }),
});

export const analyticsValidations = {
  createAnalyticsValidationSchema,
  updateAnalyticsValidationSchema,
};
