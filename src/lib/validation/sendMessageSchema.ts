import { z } from "zod";
export const sendMessageSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty({ message: "First name is required" })
    .min(3, { message: "First name is too short" })
    .max(20, { message: "First name is too long" }),
  lastName: z
    .string()
    .trim()
    .nonempty({ message: "Last name is required" })
    .min(3, { message: "Last name is too short" })
    .max(20, { message: "Last name is too long" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .max(50, { message: "Email is too long" })
    .email({ message: "Invalid email" })
    .transform((val) => val.toLowerCase()),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Message is required" })
    .min(10, { message: "Message is too short" })
    .max(500, { message: "Message is too long" }),
});

export type TContactForm = z.infer<typeof sendMessageSchema>;
