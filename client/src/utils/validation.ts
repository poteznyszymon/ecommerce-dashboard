import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(1, { message: "Username cannot be empty" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at lest 6 characters long" }),
});

export type loginValues = z.infer<typeof loginSchema>;
