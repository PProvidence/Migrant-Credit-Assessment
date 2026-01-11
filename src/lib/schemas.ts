import { z } from "zod";

// Shape of the form data
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required." }) // Handles empty input
    .email({ message: "Please enter a valid email address." }) // Handles "bob@" or "bob"
    .trim()
    .toLowerCase(), // Sanitization
});

// Shape of the Server Action response
export type NewsletterState = {
  success: boolean;
  message?: string;
  errors?: {
    email?: string[];
  };
};