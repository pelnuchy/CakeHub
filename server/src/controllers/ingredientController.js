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
        const { id, name, price, unit, quantity, expiryDate } = req.body;
        const ingredient = await Ingredient.create({
            ingredientID: id,
            ingredientName: name,
            ingredientPerPrice: price,
            ingredientUnit: unit,
            ingredientQuantity: quantity,
            expired: expiryDate
        });
        return res.status(201).json({
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

ingredientController.updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { name, price, unit, quantity, expiryDate } = req.body;
        const ingredient = await Ingredient.findOneAndUpdate({ ingredientID: id }, {
            ingredientName: name,
            ingredientPerPrice: price,
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

export default ingredientController;