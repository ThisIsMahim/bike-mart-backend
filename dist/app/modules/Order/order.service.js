"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const order_model_1 = require("./order.model");
const bike_model_1 = __importDefault(require("../Bike/bike.model"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const orderBike = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_model_1.default.findById(orderData.product);
    if (!bike)
        throw new Error('Bike not found');
    if (bike.quantity < orderData.quantity)
        throw new Error('Insufficient stock');
    bike.quantity -= orderData.quantity;
    bike.inStock = bike.quantity > 0;
    yield bike.save();
    const newOrder = yield order_model_1.OrderModel.create(orderData);
    return newOrder;
});
const getTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield order_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null, // Group all documents
                totalRevenue: { $sum: '$totalPrice' }, // Calculate total revenue
            },
        },
    ]);
    return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0; // Return total revenue or 0 if no orders
});
exports.orderServices = {
    orderBike,
    getTotalRevenue,
};
