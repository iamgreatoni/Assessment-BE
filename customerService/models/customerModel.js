import mongoose from 'mongoose'
import validator from 'validator';
// import { validateEmail } from '../config/validator';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            trim: true,
            required: [true, 'email address is required'],
            validate: [validator.isEmail, 'please provide a valid email']
        },
        password: {
            type: String,
            required: true,
            minlength: 10,
            trim: true
        },
        passwordConfirm: {
            type: String,
            required: [true, 'Please confirm your password'],
            trim: true,
            validate: {
              validator: function(el) {
                return el === this.password;
              },
              message: 'Passwords are not the same!'
            }
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

const Customer = mongoose.model('Order', userSchema)

export default Customer;