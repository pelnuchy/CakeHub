import express from 'express';
import orderController from '../controllers/orderController.js';
const router = express.Router();
//client
router.get('/get-order-history/:userid', orderController.getOrderHistory);
router.get('/get-own-ordered/:userid', orderController.getOwnOrdered);
router.get('/get-info-ordering/:userid', orderController.getInfoOrdering);
router.put('/update-order-checkout/:userid', orderController.orderCheckout);
router.put('/update-completed-order/:orderid', orderController.updateComletedOrder);
//admin
router.get('/get-list-cakes-sold', orderController.getListCakesSold);
//baker
router.get('/get-ordered-cake/baker', orderController.getOrderedCake);

export default router;