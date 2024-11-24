import { Request, Response, NextFunction } from 'express'
import { orderValidationSchema } from './order.validation'
import { orderServices } from './order.service'

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orderData = orderValidationSchema.parse(req.body)
    const result = await orderServices.orderBike(orderData)

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const totalRevenue = await orderServices.getTotalRevenue()
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    })
  } catch (error) {
    next(error)
  }
}

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await orderServices.getAllOrders()
    if (!result) {
      return res.status(404).json({
        message: 'No orders found',
        status: false,
      })
    } else
      res.status(200).json({
        message: 'Orders fetched successfully',
        status: true,
        data: result,
      })
  } catch (error) {
    next(error)
  }
}
