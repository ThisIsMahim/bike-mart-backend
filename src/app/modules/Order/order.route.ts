import  express  from 'express';
import { calculateRevenue, createOrder, getOrders } from './order.controller';
const router= express.Router()

router.post("/", createOrder);

router.get('/',getOrders)

router.get('/revenue',calculateRevenue)


export const orderRoute= router