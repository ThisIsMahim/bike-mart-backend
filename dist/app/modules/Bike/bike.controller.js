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
exports.bikeController = void 0;
const bike_validation_1 = require("./bike.validation");
const bike_service_1 = require("./bike.service");
const createBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // taking data from request body
        const bikeData = req.body;
        // validating data with zod parse
        const zodValidatedData = bike_validation_1.bikeValidationSchema.parse(bikeData);
        // outputting validated data
        const result = yield bike_service_1.bikeServices.createBikeInDB(zodValidatedData);
        res.status(200).json({
            message: 'Bike created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllBikes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeServices.getAllBikeData();
        res.status(200).json({
            message: 'Bikes retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = req.params.productId;
        const result = yield bike_service_1.bikeServices.getSingleBikeData(bikeId);
        if (result == null) {
            res.status(400).json({
                message: 'Bike not found',
                status: false,
            });
        }
        else
            res.status(200).json({
                message: 'Bike retrieved successfully',
                status: true,
                data: result,
            });
    }
    catch (error) {
        next(error);
    }
});
const updateBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = req.params.productId;
        const dataToUpdate = req.body;
        const result = yield bike_service_1.bikeServices.updateBikeData(bikeId, dataToUpdate);
        if (result == null) {
            res.status(400).json({
                message: 'Bike not found',
                status: false,
            });
        }
        else
            res.status(200).json({
                message: 'Bike updated successfully',
                status: true,
                data: result,
            });
    }
    catch (error) {
        next(error);
    }
});
const deleteBike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = req.params.productId;
        const result = yield bike_service_1.bikeServices.deleteBikeData(bikeId);
        if (result == null) {
            res.status(400).json({
                message: 'Bike not found',
                status: false,
            });
        }
        else
            res.status(200).json({
                message: 'Bike deleted successfully',
                status: true,
                data: result,
            });
    }
    catch (error) {
        next(error);
    }
});
exports.bikeController = {
    createBike,
    getAllBikes,
    getSingleBike,
    updateBike,
    deleteBike,
};
