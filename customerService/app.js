// Import all required npm packages 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors'

// Import all required developer packages 
import connectDB from './config/connectDB.js';
// import customerRoutes from './routes/customerRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();
// Start express app
const app = express();
app.use(express.json());
// app.use('/api/customer', customerRoutes);

const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
// Custom error handling
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Customer Service API is running....')
})

const PORT = process.env.PORT || 5002

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`.yellow.bold
  )
);


