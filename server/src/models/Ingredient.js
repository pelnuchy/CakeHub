
import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    ingredientID: {
        type: String,
        required: true
    },
    ingredientName: {
        type: String,
        required: true
    },
    ingredientQuantity: {
        type: Number,
        required: true
    },
    ingredientUnit: {
        type: String,
        required: true
    },
    ingredientPrice: {
        type: Number,
        required: true
    },
    expired: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true
    });

const Ingredient = mongoose.model('ingredients', ingredientSchema);

export default Ingredient;