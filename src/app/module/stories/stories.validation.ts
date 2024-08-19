import { z } from "zod";
export const bannerSchema = z.object({
  img: z.string(),
  title: z.string().min(1),
});
const createStoriesValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    category: z.string().min(1),
    subCategory: z.string().optional(),
    banners: z.array(bannerSchema).nonempty(),
  }),
});
export const storiesValidationSchemas = { createStoriesValidationSchema };
