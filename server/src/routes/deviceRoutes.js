import express from 'express';
import deviceController from '../controllers/deviceController.js';
const router = express.Router();

router.get('/get-all-devices', deviceController.getAllDevices);
router.put('/update-quantity-device/:device_id/device', deviceController.updateQuantityDevice);
router.put('/delete-device/:id', deviceController.deleteDevice);

export default router;
