import  express  from 'express';
import { bikeController } from './bike.controller';
// using express router to crete a router at api/products endpoint
const router= express.Router()

// post method to create a bike
router.post('/',bikeController.createBike)

// get method to get all bikes at api/products
router.get('/',bikeController.getAllBikes)

// get method to get single bike by product id
router.get('/:productId',bikeController.getSingleBike)

// put method to update specific bike data
router.put("/:productId",bikeController.updateBike)

// delete method to delete specific bike data
router.delete("/:productId",bikeController.deleteBike)

export const productRoute=router