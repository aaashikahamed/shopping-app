import Products from "../db_models/products.js";
import { errHandler } from "../utilities/error.js";
import Categories from "../db_models/categories.js";

export const createProduct = async (request, response, next) => {
    if (!request.user.isAdmin) {
        next(errHandler(403, 'You can\'t  create a product'))
    }
    try {
        const newProduct = new Products({
            ...request.body,
            userId: request.user.id
        });

        const savedProduct = await newProduct.save();
        response.status(201).json(savedProduct);

    } catch (error) {
        next(error)
    }
};

export const getAllProducts = async (request, response, next) => {
    try {
        const getProducts = await Products.find().populate('categoryId', 'name');
        response.status(200).json(getProducts);
    } catch (error) {
        next(error)
    }
};

export const deleteProduct = async (request, response, next) => {
    if (!request.user.isAdmin || request.user.id !== request.params.userId) {
        return next(errHandler(403, 'You can\'t delete this product'))
    }
    const product = await Products.findById(request.params.productId);
    if (!product) {
        return next(errHandler(404, 'Product not found'))
    }
    try {
        await Products.findByIdAndDelete(request.params.productId);
        response.status(200).json('The product is deleted!')
    } catch (error) {
        next(error)
    }
};

export const editProduct = async (request, response, next) => {
    if (!request.user.isAdmin || request.user.id !== request.params.userId) {
        return next(errHandler(403, 'You are not allowed to delete this product'))
    }
    const product = await Products.findById(request.params.productId);
    if (!product) {
        return next(errHandler(404, 'Product not found'))
    }
    try {
        const updatedProduct = await Products.findByIdAndUpdate(request.params.productId, {
            ...request.body,
        }, { new: true });
        response.status(200).json(updatedProduct)
    } catch (error) {
        next(error)
    }
};

export const getProduct = async (request, response, next) => {
    try {
        const getProduct = await Products.findById(request.params.productId).populate('categoryId', 'productName');
        response.status(200).json(getProduct);
    } catch (error) {
        next(error)
    }
    
};

export const getProductsByCategory = async (request, response, next) => {
    try {
        const categoryId = request.params.categoryId;

        const category = await Categories.findById(categoryId);
        if (!category) {
            return next(errHandler(404,'Category not found' ));
        }
        
        const products = await Products.find({ categoryId: categoryId }).select('productName description regularPrice discountPrice offer trending imageUrls');

        response.status(200).json({ category, products });
    } catch (error) {
        next(error);
    }
};
