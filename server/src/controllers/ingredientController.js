import Ingredient from "../models/Ingredient.js";

const ingredientController = {};

ingredientController.getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find().lean().exec();
        return res.status(200).json({ ingredients });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    };
};

export default ingredientController;