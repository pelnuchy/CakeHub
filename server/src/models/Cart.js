import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
    {
        cake_id: {type: String, required: true},
        cakeQuantity: {type: Number,required: true},
        total_price: {type: Number,required: true}
    }, 
    {
        _id: false,
    }
);

const cartSchema = new mongoose.Schema(
    {
        cartID: {type: String, required: true},
        user_id: {type: String, required: true},    
        cakes: {type: [cakeSchema], required: false} 
    },
    {
        timestamps: true
    }
);
const Cart = mongoose.model('carts', cartSchema);
export default Cart;