import Carts from '../db_models/carts.js';
import Products from '../db_models/products.js';
import { errHandler } from '../utilities/err.js';

export const addCart = async (request, response, next) => {
    const { userId, productId, quantity } = request.body;
    try {
        const product = await Products.findById(productId);
        if (!product) {
            next(errHandler(404, 'Product not found!'))
        }

        // Check user already has this product in the cart
        let cart = await Carts.findOne({userId});
        if (!cart) {
            cart = new Carts({ userId, cartsItems: [] });
        }

        const itemIndex = cart.cartsItems.findIndex((item) => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.cartsItems[itemIndex].quantity += quantity;
        } else {
            // Product does not exist in cart, add new item
            cart.cartsItems.push({ productId, quantity });
        }
        
        await cart.save();
        response.status(200).json(cart);

    } catch (error) {
        next(error)
    }
};


export const getCartItems = async (request, response, next) => {
    try {
        // Destructure userId from the request params.
        const {userId} = request.params;

        // Check if the userId in the request params matches the userId from the request.
        // If they don't match, it means the user is not authorized to access the cart.
        if (request.user.id !== request.params.userId) {
            // Throw an error with a message indicating that the user is not authorized.
            return next(errHandler(403, 'You can\'t see cart!'))
        }
        
        // Find the cart by the userId in the request params and populate the cartsItems with the productId.
        const cart = await Carts.findOne({ userId }).populate('cartsItems.productId');

        // If the cart is not found, return an empty array to the client.
        if (!cart) {
            return response.status(200).json([]);
        }

        // Return the cart items to the client.
        response.status(200).json(cart.cartsItems)

    } catch (error) {
        // If an error occurs, pass it to the next middleware function for handling.
        next(error)
    }
};


/**
 This function delete a cart item from the user's cart
 */
export const removeCartItem = async (request, response, next) => {
    try {
        // Find the cart of the user making the request

        const cart = await Carts.findOne({ userId: request.user.id });
        
        // If the cart is not found, return an error
        if (!cart) {
            return next(errHandler(404, 'Cart not found!'));
        }

        // Find the index of the item in the cart's items array
        // that matches the id of the item to be deleted
        const itemIndex = cart.cartsItems.findIndex(item => item._id.toString() === request.params.cartItemId);
        
        // If the item is not found in the cart, return an error
        if (itemIndex === -1) {
            return next(errHandler(404, 'Item not found in cart!'));
        }

        // Use the splice method to remove the item from the cart's items array
        // syntax: splice(startIndex, deleteCount);  This is used in array to remove, replacing, adding element
        cart.cartsItems.splice(itemIndex, 1);  

        // Save the updated cart back to the database
        await cart.save();
        
        // Return a success message to the client
        response.status(200).json('Item Deleted from cart!');

    } catch (error) {
        // If an error occurs, pass it to the next middleware function for handling
        next(error)
    }
};

 /*
 This function updates the quantity of a cart item in the user's cart.
 */
export const updateQuantity = async (request, response, next) => {
    try {
        // Find the cart of the user making the request
        const cart = await Carts.findOne({ userId: request.user.id });

        // If the cart is not found, return an error
        if (!cart) {
            return next(errHandler(404, 'Cart not found!'));
        }

        // Find the cart item in the user's cart that matches the id of the item to be updated
        const cartItem = cart.cartsItems.find(item => item._id.toString() === request.params.cartItemId);

        // If the cart item is not found, return an error
        if (!cartItem) {
            return next(errHandler(404, 'Cart item not found!'));
        }

        // Update the quantity of the cart item with the new quantity sent in the request body
        cartItem.quantity = request.body.quantity;

        // Save the updated cart back to the database
        await cart.save();

        response.status(200).json('successfully updated');

    } catch (error) {
        next(error);
    }
}