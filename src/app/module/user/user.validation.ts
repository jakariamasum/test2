import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    password: z.string().min(3),
    email: z.string(),
    role: z.enum(["reporter", "admin"]),
  }),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    password: z.string().optional(),
    email: z.string().optional(),
    role: z.enum(["reporter", "admin"]).optional(),
    img: z.string().optional(),
  }),
});

export const userValidationSchemas = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
