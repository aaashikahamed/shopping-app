import mongoose from "mongoose";

const CartsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartsItems: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
        }
    ],
    totalPrice: {
        type: Number,
    }

}, {timestamps: true});

const Carts = mongoose.model('Carts', CartsSchema);

export default Carts;