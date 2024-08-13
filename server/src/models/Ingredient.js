
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
    ingredientPerQuantity: {
        type: Number,
        required: true
    },
    ingredientUnit: {
        type: String,
        required: true
    },
    ingredientPerPrice: {
        type: Number,
        required: true
    },
    expired: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    });

const Ingredient = mongoose.model('ingredients', ingredientSchema);

export default Ingredient;