import express from 'express';
import { createCategories, getCategories, removeCategory, editCategory } from '../controllers/category.js';
import { tokenVerify } from '../utilities/userVerify.js';

const router = express.Router();

router.post('/createCategories', tokenVerify, createCategories);
router.get('/getCategories', getCategories);
router.delete('/delete/:categoryId', tokenVerify, removeCategory);
router.put('/edit/:categoryId', tokenVerify, editCategory)

export default router;