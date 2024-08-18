import { z } from "zod";
const CategorySchema = z.object({
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().optional(),
});
const createVideoValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    video: z.string().min(1, "Video ID or URL is required"),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string()).nonempty("At least one tag is required"),
    category: CategorySchema,
  }),
});

export const videoValidationSchemas = {
  createVideoValidationSchema,
};
