import { OrderModel } from './order.model'
import bikeModel from '../Bike/bike.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const orderBike = async (orderData: any) => {
  const bike = await bikeModel.findById(orderData.product)

  if (!bike) throw new Error('Bike not found')
  if (bike.quantity < orderData.quantity) throw new Error('Insufficient stock')

  bike.quantity -= orderData.quantity
  bike.inStock = bike.quantity > 0
  await bike.save()

  const newOrder = await OrderModel.create(orderData)
  return newOrder
}

const getAllOrders = async () => {
  try {
    const result = await OrderModel.find()
    return result
  } catch (error) {
    console.log(error)
  }
}

const getTotalRevenue = async (): Promise<number> => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // Group all documents
        totalRevenue: { $sum: '$totalPrice' }, // Calculate total revenue
      },
    },
  ])

  return result[0]?.totalRevenue || 0 // Return total revenue or 0 if no orders
}

export const orderServices = {
  orderBike,
  getTotalRevenue,
  getAllOrders,
}
