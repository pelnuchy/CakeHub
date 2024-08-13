import express from 'express';
import deviceController from '../controllers/deviceController';
const router = express.Router();

router.get('/get-all-devices', deviceController.getAllDevices);

export default router;