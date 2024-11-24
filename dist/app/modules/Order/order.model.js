"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Bike", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
});
exports.OrderModel = (0, mongoose_1.model)("Order", orderSchema);
