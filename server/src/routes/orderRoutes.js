import express from 'express';
import orderController from '../controllers/orderController.js';
const router = express.Router();

router.get('/get-order-history/:userid', orderController.getOrderHistory);

export default router;