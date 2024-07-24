import express from 'express';
import cakeController from '../controllers/cakeController.js';
const router = express.Router();

router.get('/get-all-cakes', cakeController.getAllCakes);
router.get('/get-all-cakes-occasion/:occasion', cakeController.getAllCakesOccasion);
router.get('/get-details-cake/:id', cakeController.getDetailCake);
router.get('/get-order-history/:userid', cakeController.getOrderHistory);
export default router; 