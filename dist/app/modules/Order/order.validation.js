"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    product: zod_1.z.string().regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId" }), // Ensures it's a valid MongoDB ObjectId
    quantity: zod_1.z.number().min(1, { message: "Quantity must be at least 1" }),
    totalPrice: zod_1.z.number().min(0, { message: "Total price must be 0 or greater" }),
});
