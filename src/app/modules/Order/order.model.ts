import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
  email: { type: String, required: true},
  product: { type: Schema.Types.ObjectId, ref: "Bike", required: true },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true, min: 0 },
});

export const OrderModel = model<Order>("Order", orderSchema);
