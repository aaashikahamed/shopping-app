import Carts from '../db_models/carts.js';
import Products from '../db_models/products.js';
import { errHandler } from '../utilities/error.js';

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
        const {userId} = request.params;

        if (request.user.id !== request.params.userId) {
            return next(errHandler(403, 'You can\'t see cart!'))
        }
        
        const cart = await Carts.findOne({ userId }).populate('cartsItems.productId');

        if (!cart) {
            return response.status(200).json([]);
        }

        response.status(200).json(cart.cartsItems)

    } catch (error) {
        next(error)
    }
};

export const deleteCartItem = async (request, response, next) => {
    try {

        const cart = await Carts.findOne({ userId: request.user.id });
        if (!cart) {
            return next(errHandler(404, 'Cart not found!'));
        }

        const itemIndex = cart.cartsItems.findIndex(item => item._id.toString() === request.params.cartItemId);
        if (itemIndex === -1) {
            return next(errHandler(404, 'Item not found in cart!'));
        }

        // syntax: splice(startIndex, deleteCount);  This is used in array to remove, replacing, adding element
        cart.cartsItems.splice(itemIndex, 1);  

        await cart.save();
        response.status(200).json('Item Deleted from cart!');

    } catch (error) {
        next(error)
    }
};

export const updateQuantity = async (request, response, next) => {
    try {

        const cart = await Carts.findOne({ userId: request.user.id });
        if (!cart) {
            return next(errHandler(404, 'Cart not found!'));
        }

        const cartItem = cart.cartsItems.find(item => item._id.toString() === request.params.cartItemId);
        if (!cartItem) {
            return next(errHandler(404, 'Cart item not found!'));
        }

        cartItem.quantity = request.body.quantity;
        await cart.save();

        response.status(200).json('successfully updated');

      } catch (error) {
        next(error);
      }
}