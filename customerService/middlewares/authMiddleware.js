import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv';
import { Customer } from '../models/customerModel.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, JWT_SECRET)

      req.user = await Customer.findById(decoded.id)  /* .select('-password') */

      next()
    } catch (error) {
      console.error('Token failed')
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, token not found')
  }
});

export { protect };
