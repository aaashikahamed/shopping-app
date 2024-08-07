import express from 'express';
import { signUp, signIn, signout } from '../controllers/authentication.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signout);

export default router;