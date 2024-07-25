import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();

router.get('/load-cake-into-cart/:userid', cartController.loadCakeIntoCart);
router.post('/add-cake-to-cart', cartController.addCakeToCart);
router.post('/remove-cake-from-cart', cartController.removeCakeFromCart);


export default router; 

