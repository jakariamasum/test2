import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string().min(1),
    password: z.string().min(6),
    email: z.string(),
    name: z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
    }),
    role: z.enum(["reader", "journalist", "editor", "admin"]),
  }),
});

export const userValidationSchemas = {
  createUserValidationSchema,
};
