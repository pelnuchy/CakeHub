import Ingredient from "../models/Ingredient.js";

const ingredientController = {};

ingredientController.getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find().lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: ingredients
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    };
};

ingredientController.addIngredient = async (req, res) => {
    try {
        const { ingredient } = req.body;

        const ingredientExist = await Ingredient.findOne({ ingredientID: ingredient.id });
        if (ingredientExist) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Ingredient already exist'
            });
        }
        const newIngredient = await Ingredient.create(
            {
            ingredientID: ingredient.id,
            ingredientName: ingredient.name,
            ingredientPerPrice: ingredient.price,
            ingredientUnit: ingredient.unit,
            ingredientQuantity: ingredient.quantity,
            ingredientPerQuantity: ingredient.perquantity,
            expired: ingredient.expiryDate
            }
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Ingredient was added successfully',
            device: newIngredient
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

ingredientController.updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { name, price, unit, quantity, perquantity, expiryDate } = req.body;
        const ingredient = await Ingredient.findOneAndUpdate({ ingredientID: id }, {
            ingredientName: name,
            ingredientPerPrice: price,
            ingredientPerQuantity: perquantity, 
            ingredientUnit: unit,
            ingredientQuantity: quantity,
            expired: expiryDate
        }, { new: true });
        return res.status(200).json({
            status: 'SUCCESS',
            data: ingredient
        });
    }
    catch (error) {
        return res.status(400).json({
            status: 'ERROR',
            message: error.message
        });
    };

};

ingredientController.deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        await Ingredient.deleteOne({ ingredientID: id });
        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Ingredient was deleted successfully'
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    };
}
export default ingredientController;