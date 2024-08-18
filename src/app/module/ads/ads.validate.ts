import { z } from "zod";

export const CodeContentSchema = z.object({
  code: z.string().min(1),
});

export const ImageContentSchema = z.object({
  image: z.string().url().min(1),
  link: z.string().url().min(1),
});

export const AdSectionSchema = z.object({
  id: z.string(),
  position: z.enum(["header", "category", "details"]),
  type: z.enum(["code", "images"]),
  content: z.union([
    z.string().min(1),
    z.object({
      image: z.string().url().min(1),
      link: z.string().url().min(1),
    }),
  ]),
});

export const createAdsValidationSchema = z.object({
  body: z.array(AdSectionSchema),
});

export const adsValidations = {
  createAdsValidationSchema,
};
