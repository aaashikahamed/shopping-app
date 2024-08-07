import express from 'express';
import { createProduct, getAllProducts, deleteProduct, editProduct, getProduct, getProductsByCategory } from '../controllers/product.js';
import { tokenVerify } from '../utilities/userVerify.js';

const router = express.Router();

router.post('/create', tokenVerify, createProduct);
router.get('/getProducts', getAllProducts);
router.delete('/deleteProduct/:userId/:productId', tokenVerify, deleteProduct);
router.put('/editProduct/:userId/:productId', tokenVerify, editProduct )
router.get('/:productId', getProduct);
router.get('/productByCategory/:categoryId', getProductsByCategory);

export default router;
