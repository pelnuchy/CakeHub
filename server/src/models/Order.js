import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
    {
        cake_id: { type: String, required: true },
        cakeMessage: { type: String, required: false },
        cakeQuantity: { type: Number, required: true },
        total_price: { type: Number, required: true }
    },
    {
        _id: false,
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderID: { type: String, required: false },
        shippingDate: { type: Date, required: true },
        shippingAddress: { type: String, required: true },
        orderTime: { type: Date, required: false },
        paymentTime: { type: Date, required: true },
        completeTime: { type: Date, required: false },
        total_price: { type: Number, required: true },
        status: { type: String, required: false },
        user_id: { type: String, required: true },
        s_cakeQuantity: { type: Number, required: true },
        cakes: { type: [cakeSchema], required: true }
    },
    {
        timestamps: true
    }
);
const Order = mongoose.model('orders', orderSchema);
export default Order;