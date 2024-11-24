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
exports.bikeServices = void 0;
const bike_model_1 = __importDefault(require("./bike.model"));
const createBikeInDB = (bike) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bike_model_1.default.create(bike);
});
const getAllBikeData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_model_1.default.find();
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
// using the randomly generated _id to find product
const getSingleBikeData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_model_1.default.findOne({ _id: id });
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const updateBikeData = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_model_1.default.findByIdAndUpdate({ _id: id }, data, {
            new: true,
            runValidators: true,
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const deleteBikeData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.default.findByIdAndDelete({ _id: id });
    return result;
});
exports.bikeServices = {
    getAllBikeData,
    createBikeInDB,
    getSingleBikeData,
    updateBikeData,
    deleteBikeData
};
