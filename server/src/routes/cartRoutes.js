import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();

router.post('/add-cake-to-cart', cartController.addCakeToCart);
router.post('/remove-cake-from-cart', cartController.removeCakeFromCart);


export default router; 

