import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrls: {
        type: Array,
        required: true,
    },
    regularPrice: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
        required: true,
    },
    offer: {
        type: Boolean,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, { timestamps: true });

const Products = mongoose.model('Products', productsSchema);

export default Products;