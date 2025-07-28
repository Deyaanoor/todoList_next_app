import { z } from "zod";
export const todoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "Title must be at least 5 characters long",
      })
      .max(30, {
        message: "Title must not exceed 30 characters",
      }),
    body: z
      .string()
      .max(80, {
        message: "Body must not exceed 80 characters",
      })
      .optional(),
    completed: z.boolean(),
  });

