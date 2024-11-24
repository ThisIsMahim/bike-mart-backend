"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        required: true,
    },
    description: { type: String, required: false },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
// modeling the bike schema to manipulate with mongodb
const bikeModel = (0, mongoose_1.model)('bike', bikeSchema);
exports.default = bikeModel;
