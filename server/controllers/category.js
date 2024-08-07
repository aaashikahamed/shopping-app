import Categories from "../db_models/categories.js";
import { errHandler } from "../utilities/err.js";


{ /* Create Category function for admin */}
export const createCategories = async (request, response, next) => {
    if (!request.user.isAdmin) {
        return next(errHandler(403, 'You can\'t create category'));
    }

    const {name} = request.body;

    if (!name || name === '') {
        return next(errHandler(400, 'Name is required'))
    }

    try {
        const newCategory = new Categories({name});
        await newCategory.save();
        response.status(201).json(newCategory);
        
    } catch (error) {
        if (error.code === 11000) {
            return next(errHandler(400, 'Category exists!'));
        } else {
            next(error)
        }
    }
};

{/* Function to retrive category from database */}
export const getCategories = async (request, response, next) => {
    try {
        const categories = await Categories.find()
        response.status(200).json(categories);
    } catch (error) {
        next(error)
    }
};


{/* Function to delete category from database */}
export const removeCategory = async (request, response, next) => {
    const category = await Categories.findById(request.params.categoryId);
    if (!category) {
        return next(errHandler(404, 'Category not found!'));
    }
    if (!request.user.isAdmin) {
        return next(errHandler(403, 'You can\'t get category'));
    }

    try {
        await Categories.findByIdAndDelete(request.params.categoryId);
        response.status(200).json('Category is deleted');
    } catch (error) {
        next(error)
    }
};

{/* Function to edit category from database */}
export const editCategory = async (request, response, next) => {
    const category = await Categories.findById(request.params.categoryId);
    if (!category) {
        return next(errHandler(404, 'Category not found!'));
    }
    if (!request.user.isAdmin) {
        return next(errHandler(403, 'You can\'t edit this category!'))
    }
    
    try {
        const updatedCategory = await Categories.findByIdAndUpdate(request.params.categoryId, {
            name: request.body.name
        }, { new: true });
        response.status(200).json(updatedCategory);
    } catch (error) {
        next(error)
    }
};