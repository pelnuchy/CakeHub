import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
    {
        cake_id: { type: String, required: true },
        img_url: { type: String, required: true },
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
        orderID: { type: String, required: true },
        shippingDate: { type: Date, required: false },
        shippingAddress: { type: String, required: false },
        orderTime: { type: Date, required: false },
        paymentTime: { type: Date, required: false },
        completeTime: { type: Date, required: false },
        total_price: { type: Number, required: false },
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