import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "The name field is required"),
    email: z.string().email("The email typed isn't valid").min(1, "The email field is required."),
    password: z.string().min(6, "The password must contains at least 6 characters."),
    confirmPassword: z.string().min(6, "The confirmation of password must contains at least 6 characters.")
}).refine(data => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ['confirmPassword']
});

export type FormValues = z.infer<typeof formSchema>;
