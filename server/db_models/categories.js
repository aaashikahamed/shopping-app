import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Categories = mongoose.model('Categories', categorySchema);

export default Categories;