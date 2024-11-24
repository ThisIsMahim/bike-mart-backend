import { model, Schema } from 'mongoose'
import { Bike } from './bike.interface'

const bikeSchema = new Schema<Bike>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    required: true,
  },
  description: { type: String, required: false },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

// modeling the bike schema to manipulate with mongodb
const bikeModel = model('bike', bikeSchema)

export default bikeModel
