import { z } from 'zod';

export const LoginFormSchema = z
  .object({
    email: z.string().min(1, {message: "Email is required!"}).trim(),
    password: z.string().min(1, {message: "Password is required!"}),
  })
  .strict();

export type LoginFormType = z.infer<typeof LoginFormSchema>;