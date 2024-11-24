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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.calculateRevenue = exports.createOrder = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = order_validation_1.orderValidationSchema.parse(req.body);
        const result = yield order_service_1.orderServices.orderBike(orderData);
        res.status(201).json({
            message: 'Order created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createOrder = createOrder;
const calculateRevenue = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.orderServices.getTotalRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.calculateRevenue = calculateRevenue;
const getOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getAllOrders();
        if (!result) {
            return res.status(404).json({
                message: 'No orders found',
                status: false,
            });
        }
        else
            res.status(200).json({
                message: 'Orders fetched successfully',
                status: true,
                data: result,
            });
    }
    catch (error) {
        next(error);
    }
});
exports.getOrders = getOrders;
