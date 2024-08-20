import { z } from "zod";

const LocationSchema = z.object({
  city: z.string().min(1, "City is required"),
  area: z.string().optional(),
});

const CategorySchema = z.object({
  category: z.string().optional(),
  subCategory: z.string().optional(),
});
const updateLocationSchema = z.object({
  city: z.string().optional(),
  area: z.string().optional(),
});

const updateCategorySchema = z.object({
  category: z.string().optional(),
  subCategory: z.string().optional(),
});

const createNewsValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string()).min(1, "At least one tag is required"),
    img: z.string().min(1, "Image URL is required"),
    author: z.string().min(1, "Author ID is required"),
    location: LocationSchema,
    category: CategorySchema,
  }),
});
const updateNewsValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    author: z.string().optional(),
    location: updateLocationSchema.optional(),
    category: updateCategorySchema.optional(),
    lang: z.string().optional(),
  }),
});

export const newsValidations = {
  createNewsValidationSchema,
  updateNewsValidationSchema,
};
