import { z } from "zod";

export const authSchema = z.object({
  username: z.string().trim().min(1, { message: "Username cannot be empty" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at lest 6 characters long" }),
});

export type authValues = z.infer<typeof authSchema>;
