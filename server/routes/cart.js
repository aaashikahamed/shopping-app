import express from 'express';
import { tokenVerify } from '../utilities/userVerify.js';
import { addCart, getCartItems, removeCartItem, updateQuantity } from '../controllers/cart.js';

const router = express.Router();

router.post('/addCart', tokenVerify, addCart);
router.get('/:userId', tokenVerify, getCartItems);
router.delete('/:cartItemId', tokenVerify, removeCartItem);
router.put('/:cartItemId', tokenVerify, updateQuantity);


export default router;