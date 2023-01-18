import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            trim: true
        },
        customerId: {
            type: String,
            required: true,
            trim: true
        },
        itemId: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        orderStatus: {
            type: String,
            default: 'placed',
            trim: true
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

const Order = mongoose.model('Order', orderSchema)

export default Order;