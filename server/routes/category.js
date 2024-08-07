import express from 'express';
import { createCategory, getCategory, deleteCategory, editCategory } from '../controllers/category.js';
import { tokenVerify } from '../utilities/userVerify.js';

const router = express.Router();

router.post('/createCategory', tokenVerify, createCategory);
router.get('/getCategory', getCategory);
router.delete('/delete/:categoryId', tokenVerify, deleteCategory);
router.put('/edit/:categoryId', tokenVerify, editCategory)

export default router;