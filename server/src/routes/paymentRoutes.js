import express from 'express';
import 'dotenv/config';
import paymentController from '../controllers/paymentController.js';
const router = express.Router();

router.get('/payment/config', (req, res) => {
    return res.status(200).json({
        status: 'OK',
        data: process.env.CLIENT_ID
    })
});

router.post('/callback', paymentController.momoIPN);

router.post('/paymentMomo/:amount',paymentController.paymentMomo);
router.post('/paymentVnpay',paymentController.paymentVnpay);
router.post('/transactionStatusMomo/:orderId',paymentController.checkTransactionStatusMomo);
export default router;