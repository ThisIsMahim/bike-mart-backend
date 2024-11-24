"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    const errorResponse = {
        message: err.message || "Something went wrong",
        success: false,
        error: {
            name: err.name || "Error",
            errors: err.errors || null,
        },
        stack: config_1.default.node_env === "development" ? err.stack : undefined,
    };
    res.status(err.status || 500).json(errorResponse);
};
exports.default = globalErrorHandler;
