import express from 'express';
import orderController from '../controllers/orderController.js';
const router = express.Router();

//client
//History
router.get('/get-order-history/:userid', orderController.getOrderHistory);
//Purchase
router.get('/get-own-ordered/:userid', orderController.getOwnOrdered);
router.put('/update-completed-order/:orderid', orderController.updateComletedOrder);
//Checkout
router.post('/create-order', orderController.createOrder);
router.get('/get-info-ordering/:userid', orderController.getInfoOrdering);
router.get('/check-num-cake-order/:userid', orderController.checkNumberOfCakesAllOrder);


//admin
router.get('/get-list-cakes-sold', orderController.getListCakesSold);
router.get('/get-list-ingredients-sold', orderController.getListIngredientsSold);


//baker
//dashboard
router.get('/get-status-cake/baker', orderController.getOrderedCake);
//bakingsession
router.get('/get-handling-cake/baker', orderController.getHandlingCake);
router.put('/update-order-status/baker/:orderid', orderController.updateStatusOrder);

export default router;