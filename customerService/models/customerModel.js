import mongoose from 'mongoose'
import { validateEmail } from '../config/validator';

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            trim: true,
            required: [true, 'email address is required'],
            validate: [validateEmail, 'please fill a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: 10,
            trim: true,
        },
        dateCreated: {
            type: Date
        },
        timeCreated: {
            type: Date
        }
    },
    { timestamps: true } 
)

const Customer = mongoose.model('Order', customerSchema)

export default Customer;