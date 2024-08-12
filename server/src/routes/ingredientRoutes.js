import express from 'express';
import ingredientController from '../controllers/ingredientController.js';

const router = express.Router();

router.get('/admin/get-ingredients', ingredientController.getIngredients);
router.get('/baker/get-ingredients', ingredientController.getIngredients);

export default router;