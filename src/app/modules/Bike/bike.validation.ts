import { z } from "zod";

// using zod to validate the bike schema and create a new schema
export const bikeValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  brand: z.string().nonempty("Brand is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
    required_error: "Category is required",
  }),
  description: z.string().optional(),
  quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
  inStock: z.boolean({ required_error: "InStock status is required" }),
});

export type ValidatedBike = z.infer<typeof bikeValidationSchema>;
