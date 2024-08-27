import { z } from "zod";

export const AdSectionSchema = z.object({
  id: z.string(),
  position: z.enum(["header", "category", "details"]),
  type: z.enum(["code", "images"]),
  content: z.union([
    z.string().min(1),
    z.object({
      image: z.string().url().min(1),
      link: z.string(),
    }),
  ]),
});
const updateAdSectionSchema = z.object({
  id: z.string().optional(),
  position: z.enum(["header", "category", "details"]).optional(),
  type: z.enum(["code", "images"]).optional(),
  content: z.union([
    z.string().min(1),
    z
      .object({
        image: z.string(),
        link: z.string(),
      })
      .optional(),
  ]),
});

export const createAdsValidationSchema = z.object({
  body: z.array(AdSectionSchema),
});
export const updateAdsValidationSchema = z.object({
  body: z.array(updateAdSectionSchema).optional(),
});

export const adsValidations = {
  createAdsValidationSchema,
  updateAdSectionSchema,
};
