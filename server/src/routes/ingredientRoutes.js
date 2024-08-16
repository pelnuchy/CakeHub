import {Router} from 'express';
import ingredientController from '../controllers/ingredientController.js';

const router = Router();

router.get('/baker/get-ingredients', ingredientController.getIngredients);
router.post('/baker/add-ingredient', ingredientController.addIngredient);
router.put('/baker/update-ingredient/:id', ingredientController.updateIngredient);
router.delete('/baker/delete-ingredient/:id', ingredientController.deleteIngredient);
export default router;