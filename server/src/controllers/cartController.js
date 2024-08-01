import Cake from '../models/Cake.js';
import Cart from '../models/Cart.js';

const cartController = {};


cartController.loadCakeIntoCart = async (req, res) => {
    try {
        const user_id = req.params.userid;
        const cart = await Cart.findOne({ user_id: user_id });

        // Kiểm tra xem giỏ hàng có tồn tại không
        if (!cart) {
            console.error('Cart not found');
            return [];
        }

        // Lấy danh sách các bánh trong giỏ hàng
        const CartItem = cart.cakes;

        if (CartItem.length === 0) {
            return res.status(404).json({ message: 'No cakes found in cart' });
        }

        res.status(200).json(CartItem);

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}




cartController.removeCakeFromCart = async (req, res) => {
    try {
        const { userID, selectedNewCakeID } = req.body;
        const cart = await Cart.findOne({ user_id: userID });

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
        const { selectedNewCakeID, selectedQuantity, selectedTotalPrice } = req.body;
        const userID = req.params.userid;
        const cart = await Cart.findOne({ user_id: userID });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const newCake = {
            cake_id: selectedNewCakeID,
            cakeQuantity: selectedQuantity,
            total_price: selectedTotalPrice
        };

        //kiểm tra cakeID có ton tai trong giỏ hàng chưa
        if (newCake.cake_id === null) {
            return res.status(404).json({ message: 'Cake not found' });
        }

        const cakeIndex = cart.cakes.findIndex(cake => cake.cake_id === selectedNewCakeID);
        if (cakeIndex == -1) {
            cart.cakes.push(newCake);
        }
        else {
            cart.cakes[cakeIndex].cakeQuantity += newCake.cakeQuantity;
            cart.cakes[cakeIndex].total_price += newCake.total_price;
        }

        // Replace lại document cũ bằng document mới
        await cart.save();

        return res.status(200).json(cart);

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

export default cartController;