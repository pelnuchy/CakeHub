import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();


router.post('/loginUser', userController.loginUser);

router.post('/signupUser', userController.signupUser);

export default router;