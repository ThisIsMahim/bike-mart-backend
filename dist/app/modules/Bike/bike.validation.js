"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidationSchema = void 0;
const zod_1 = require("zod");
// using zod to validate the bike schema and create a new schema
exports.bikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required"),
    brand: zod_1.z.string().nonempty("Brand is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    category: zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
        required_error: "Category is required",
    }),
    description: zod_1.z.string().optional(),
    quantity: zod_1.z.number().int().nonnegative("Quantity must be a non-negative integer"),
    inStock: zod_1.z.boolean({ required_error: "InStock status is required" }),
});
