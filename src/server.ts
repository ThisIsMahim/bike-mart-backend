import mongoose from 'mongoose'
import config from './app/config'
import app from './app'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port||3000, () => {
      console.log(`server running on port ${config.port}`)
    })
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}

server()

export default server
