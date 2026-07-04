import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject is too short'),
    message: z.string().min(10, 'Enter your message to be at least more than that'),
});

// Infer the TypeScript type from the schema
export type ContactFormData = z.infer<typeof contactSchema>;