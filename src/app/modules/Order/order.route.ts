import  express  from 'express';
import { calculateRevenue, createOrder } from './order.controller';
const router= express.Router()

router.post("/", createOrder);


router.get('/revenue',calculateRevenue)


export const orderRoute= router