import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();

router.get('/load-cake-into-cart/:userid', cartController.loadCakeIntoCart);
router.put('/add-cake-to-cart/:userid', cartController.addCakeToCart);
router.put('/remove-cake-from-cart/cart', cartController.removeCakeFromCart); // parameter query
router.put('/update-cake-quantity-from-cart/:userid/cart', cartController.updateCakeQuantityFromCart);
router.put('/update-cake-size-from-cart/:userid/cart', cartController.updateCakeSizeFromCart);
router.put('/update-cake-flavor-from-cart/:userid/cart', cartController.updateCakeFlavorFromCart);
export default router; 

