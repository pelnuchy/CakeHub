import express from 'express';
import orderController from '../controllers/orderController.js';
const router = express.Router();

router.get('/get-order-history/:userid', orderController.getOrderHistory);
router.get('/get-own-ordered/:userid', orderController.getOwnOrdered);
router.get('/get-info-ordering/:userid', orderController.getInfoOrdering);
router.put('/update-order-checkout/:userid', orderController.orderCheckout);
router.get('/get-list-cakes-sold', orderController.getListCakesSold);

export default router;