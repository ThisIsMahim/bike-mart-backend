import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  product: z.string().regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId" }), // Ensures it's a valid MongoDB ObjectId
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  totalPrice: z.number().min(0, { message: "Total price must be 0 or greater" }),
});
