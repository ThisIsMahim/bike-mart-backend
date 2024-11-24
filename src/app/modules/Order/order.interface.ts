import { Types } from "mongoose";

export type Order ={
    email: string;
    product: Types.ObjectId; // Refers to the product (bike)
    quantity: number;
    totalPrice: number;
  }