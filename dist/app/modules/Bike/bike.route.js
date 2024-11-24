"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
// using express router to crete a router at api/products endpoint
const router = express_1.default.Router();
// post method to create a bike
router.post('/create-bike', bike_controller_1.bikeController.createBike);
// get method to get all bikes at api/products
router.get('/', bike_controller_1.bikeController.getAllBikes);
// get method to get single bike by product id
router.get('/:productId', bike_controller_1.bikeController.getSingleBike);
// put method to update specific bike data
router.put("/:productId", bike_controller_1.bikeController.updateBike);
// delete method to delete specific bike data
router.delete("/:productId", bike_controller_1.bikeController.deleteBike);
exports.productRoute = router;
