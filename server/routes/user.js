import express from 'express';
import {  deleteUser } from '../controllers/user.js';
import { tokenVerify } from '../utilities/userVerify.js';

const router = express.Router();


router.delete('/deleteUser/:userId', tokenVerify, deleteUser);

export default router;