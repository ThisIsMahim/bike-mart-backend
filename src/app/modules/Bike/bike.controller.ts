import { NextFunction, Request, Response } from 'express'
import { bikeValidationSchema } from './bike.validation'
import { bikeServices } from './bike.service'

const createBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // taking data from request body
    const bikeData: object = req.body
    // validating data with zod parse
    const zodValidatedData = bikeValidationSchema.parse(bikeData)
    // outputting validated data
    const result = await bikeServices.createBikeInDB(zodValidatedData)
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllBikes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bikeServices.getAllBikeData()
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleBike = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bikeId = req.params.productId
    const result = await bikeServices.getSingleBikeData(bikeId)
    if (result == null) {
      res.status(400).json({
        message: 'Bike not found',
        status: false,
      })
    } else
      res.status(200).json({
        message: 'Bike retrieved successfully',
        status: true,
        data: result,
      })
  } catch (error) {
    next(error)
  }
}

const updateBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bikeId = req.params.productId
    const dataToUpdate = req.body
    const result = await bikeServices.updateBikeData(bikeId, dataToUpdate)
    if (result == null) {
      res.status(400).json({
        message: 'Bike not found',
        status: false,
      })
    } else
      res.status(200).json({
        message: 'Bike updated successfully',
        status: true,
        data: result,
      })
  } catch (error) {
    next(error)
  }
}

const deleteBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bikeId = req.params.productId
    const result = await bikeServices.deleteBikeData(bikeId)
    if (result == null) {
      res.status(400).json({
        message: 'Bike not found',
        status: false,
      })
    } else
      res.status(200).json({
        message: 'Bike deleted successfully',
        status: true,
        data: result,
      })
  } catch (error) {
    next(error)
  }
}

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
}
