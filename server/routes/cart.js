import express from 'express';
import { tokenVerify } from '../utilities/userVerify.js';
import { addCart, getCartItems, deleteCartItem, updateQuantity } from '../controllers/cart.js';

const router = express.Router();

router.post('/addCart', tokenVerify, addCart);
router.get('/:userId', tokenVerify, getCartItems);
router.delete('/:cartItemId', tokenVerify, deleteCartItem);
router.put('/:cartItemId', tokenVerify, updateQuantity);


export default router;