import express from 'express';
import orderController from '../controllers/orderController.js';
const router = express.Router();

router.get('/get-order-history/:userid', orderController.getOrderHistory);
router.get('/get-own-order/:userid', orderController.getOwnOrder);
export default router;