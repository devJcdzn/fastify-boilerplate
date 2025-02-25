import { z } from "zod";

export const getUserRequestSchema = z.object({
  id: z.string(),
});

export const getUserResponseSchema = z.object({
  200: z.object({
    success: z.boolean().default(true),
  }),
});
