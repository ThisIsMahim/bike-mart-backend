"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bike_route_1 = require("./app/modules/Bike/bike.route");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const order_route_1 = require("./app/modules/Order/order.route");
const app = (0, express_1.default)();
// parser middleware
app.use(express_1.default.json());
// using productRoute
app.use('/api/products', bike_route_1.productRoute);
//using order Route
app.use('/api/orders', order_route_1.orderRoute);
app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Running server',
    });
});
// Add global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
