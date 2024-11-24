import express, { Request, Response } from 'express'
import { productRoute } from './app/modules/Bike/bike.route'
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { orderRoute } from './app/modules/Order/order.route';

const app = express()

// parser middleware
app.use(express.json()); 

// using productRoute
app.use('/api/products', productRoute)

//using order Route
app.use('/api/orders', orderRoute) 

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Running server',
  })
})

// Add global error handler
app.use(globalErrorHandler);

export default app
