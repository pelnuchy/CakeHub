import Cake from '../models/Cake.js';
import Cart from '../models/Cart.js';

const cartController = {};

cartController.removeCakeFromCart = async (req, res) => {
    try {
        const { userID, selectedNewCakeID} = req.body;
        const cart =  await Cart.findOne({ user_id: userID});
        
        const cakeIndex = cart.cakes.findIndex(cake => cake.cake_id === selectedNewCakeID);

        if (cakeIndex === -1) {
            return res.status(404).json({ message: 'Cake not found in cart' });
        }

        cart.cakes.splice(cakeIndex, 1);

        await cart.save();

        res.status(200).json(cart);

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}


cartController.addCakeToCart = async (req, res) => {
    try {
        const { userID, selectedNewCakeID, selectedQuantity, selectedTotalPrice } = req.body;
        const cart =  await Cart.findOne({ user_id: userID});
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const newCake = {
            cake_id: selectedNewCakeID,
            cakeQuantity: selectedQuantity,
            total_price: selectedTotalPrice
        };

        cart.cakes.push(newCake);

        // Lưu giỏ hàng đã cập nhật
        await cart.save();

        res.status(200).json(cart);

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

export default cartController;