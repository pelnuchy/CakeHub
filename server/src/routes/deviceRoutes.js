import express from 'express';
import deviceController from '../controllers/deviceController.js';
const router = express.Router();

router.get('/get-all-devices', deviceController.getAllDevices);

export default router;