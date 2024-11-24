## Bike Mart Backend

A Node.js backend for a bike store application, built using **TypeScript**, **Express**, and **MongoDB**. It follows a modular architecture for scalability and maintainability. This API provides features for managing bikes, orders, and inventory.

---

### **Features**

#### **Bike Module**
- **Add a Bike:** Add new bikes to the inventory.
- **Get All Bikes:** Retrieve a list of all available bikes.
- **Get Bike by ID:** Fetch details of a specific bike.
- **Update a Bike:** Update bike details such as price, quantity, etc.
- **Delete a Bike:** Remove a bike from the inventory.

#### **Order Module**
- **Place an Order:** 
  - Decrease inventory quantity based on the order.
  - Mark a product as out of stock if the inventory reaches 0.
  - Handle insufficient stock gracefully.
- **Get All Orders:** Fetch all customer orders.
- **Calculate Revenue:** Aggregate total revenue from all orders placed.

#### **Error Handling**
- Custom global error handler with structured error messages for easier debugging.

---

### **Folder Structure**
```
src/
├── app/
│   ├── config/                  # Configuration files
│   ├── middleware/              # Middleware (e.g., globalErrorHandler)
│   ├── modules/
│   │   ├── Bike/                # Bike module (controllers, services, routes, etc.)
│   │   └── Order/               # Order module (controllers, services, routes, etc.)
├── app.ts                       # Main application entry
├── server.ts                    # Server setup
```

---

### **Technologies Used**
- **Node.js**: Backend runtime
- **Express.js**: Framework for handling HTTP requests
- **TypeScript**: Strongly typed language for safer code
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: MongoDB object modeling
- **Zod**: Schema validation

---

### **Getting Started**

#### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your machine.
- A [MongoDB Atlas](https://www.mongodb.com/atlas/database) database or a local MongoDB server.

#### **Clone the Repository**
```bash
git clone https://github.com/ThisIsMahim/bike-mart-backend.git
cd bike-mart-backend
```

#### **Install Dependencies**
```bash
npm install
```

#### **Environment Variables**
Create a `.env` file in the root directory and add the following variables:
```
PORT=5000
DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/bike-mart?retryWrites=true&w=majority
```

#### **Run the Application**
For development:
```bash
npm run dev
```

For production:
```bash
npm run build
npm start
```

---

### **API Endpoints**

#### **Bike Routes**
| Method | Endpoint                   | Description                |
|--------|----------------------------|----------------------------|
| POST   | `/api/products/create-bike`| Add a new bike             |
| GET    | `/api/products`            | Get all bikes              |
| GET    | `/api/products/:productId` | Get a bike by ID           |
| PUT    | `/api/products/:productId` | Update bike details        |
| DELETE | `/api/products/:productId` | Delete a bike              |

#### **Order Routes**
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/orders`         | Place an order               |
| GET	   |  `/api/orders`	       | Get all orders               |
| GET    | `/api/orders/revenue` | Calculate total revenue      |  


---



### **Contact**
For questions or suggestions:
- **Email**: mahimmasrafi04@gmail.com  
- **GitHub**: [GitHub Profile](https://github.com/ThisIsMahim)  

