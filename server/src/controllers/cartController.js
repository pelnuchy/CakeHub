import Cake from '../models/Cake.js';
import Cart from '../models/Cart.js';

const cartController = {};


cartController.loadCakeIntoCart = async (req, res) => {
    try {
        const user_id = req.params.userid;

        const cartUser = await Cart.aggregate([
            { $match: { user_id: user_id } },
            { $unwind: "$cakes" },
            {
                $lookup: {
                    from: "cakes",
                    localField: "cakes.cake_id",
                    foreignField: "cakeID",
                    as: "cakeDetail"
                }
            },
            { $unwind: "$cakeDetail" },
            {
                $addFields: {
                    "cakes.cake_id": "$cakeDetail.cakeID",
                    "cakes.cakeName": "$cakeDetail.cakeName",
                    "cakes.size": "$cakeDetail.size",
                    "cakes.img_url": "$cakeDetail.img_url",
                    "cakes.flavor": "$cakeDetail.jamFilling",
                    "cakes.price": "$cakeDetail.price"
                }
            },
            {
                $group: {
                    _id: null,
                    cakes: { $push: "$cakes" }
                }
            },
            {
                $project: {
                    _id: 0,
                    cakes: 1
                }
            }
        ]);

        // Kiểm tra xem giỏ hàng có tồn tại không
        if (!cartUser) {
            return res.status(404).json({ message: 'Cart not found' });
        }


        return res.status(200).json({
            status: 'SUCCESS',
            data: cartUser
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}




cartController.removeCakeFromCart = async (req, res) => {
    try {
        const userID = req.query.userID;
        const itemID = req.query.itemID;
        console.log(userID, itemID);
        const cart = await Cart.updateOne(
            { user_id: userID },
            { $pull: { cakes: { cake_id: itemID } } } //$pull: xóa phần tử trong mảng
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Cake removed from cart',
            cart: cart
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

cartController.updateCakeQuantityFromCart = async (req, res) => {
    try {
        const userID = req.params.userid;
        const itemID = req.query.itemID;
        const newQuantity = req.query.newQuantity;

        if (!userID || !itemID || !newQuantity) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Missing required parameters'
            });
        }

        // get price of new cake
        const cakePrice = await Cake.findOne({ cakeID: itemID }, 'price');
        if (!cakePrice) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Cake detail price not found'
            });
        }
        const price = cakePrice.price;
        const total_price = price * newQuantity;

        // update cake size and total price in cart
        const cart = await Cart.updateOne(
            { user_id: userID, "cakes.cake_id": itemID },
            {
                $set: {
                    "cakes.$.cakeQuantity": newQuantity,
                    "cakes.$.total_price": total_price
                }
            }
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Cake quantity updated',
            cart: cart
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

cartController.updateCakeFlavorFromCart = async (req, res) => {
    try {
        const userID = req.params.userid;
        const itemID = req.query.itemID;
        const newFlavor = req.query.newFlavor;

        if (!userID || !itemID || !newFlavor) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Missing required parameters'
            });
        };

        const newItemID = itemID.substring(0, itemID.indexOf("-") + 1) + newFlavor + itemID.substring(itemID.lastIndexOf("-"));

        // get price of new cake
        const cakePrice = await Cake.findOne({ cakeID: newItemID }, 'price');
        if (!cakePrice) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Cake detail price not found'
            });
        }
        const price = cakePrice.price;

        // get cake quantity in cart with itemID
        const cartCakeQuantity = await Cart.findOne(
            { user_id: userID, "cakes.cake_id": itemID },
            { "cakes.$": 1 }
        );

        if (!cartCakeQuantity || !cartCakeQuantity.cakes.length) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Cake not found in cart'
            });
        }

        const quantity = cartCakeQuantity.cakes[0].cakeQuantity;
        const total_price = price * quantity;

        // update cake size and total price in cart
        const cart = await Cart.updateOne(
            { user_id: userID, "cakes.cake_id": itemID },
            {
                $set: {
                    "cakes.$.cake_id": newItemID,
                    "cakes.$.total_price": total_price
                }
            }
        );
        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Cake size updated',
            cart: cart
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

cartController.updateCakeSizeFromCart = async (req, res) => {
    try {
        const userID = req.params.userid;
        const itemID = req.query.itemID;
        const newSize = req.query.newSize;

        if (!userID || !itemID || !newSize) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Missing required parameters'
            });
        }

        // create new itemID with new size
        const newItemID = itemID.substring(0, itemID.lastIndexOf("-") + 1) + newSize;

        // get price of new cake
        const cakePrice = await Cake.findOne({ cakeID: newItemID }, 'price');
        if (!cakePrice) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Cake detail price not found'
            });
        }
        const price = cakePrice.price;

        // get cake quantity in cart with itemID
        const cartCakeQuantity = await Cart.findOne(
            { user_id: userID, "cakes.cake_id": itemID },
            { "cakes.$": 1 }
        );

        if (!cartCakeQuantity || !cartCakeQuantity.cakes.length) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'Cake not found in cart'
            });
        }

        const quantity = cartCakeQuantity.cakes[0].cakeQuantity;
        const total_price = price * quantity;

        // update cake size and total price in cart
        const cart = await Cart.updateOne(
            { user_id: userID, "cakes.cake_id": itemID },
            {
                $set: {
                    "cakes.$.cake_id": newItemID,
                    "cakes.$.total_price": total_price
                }
            }
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Cake size updated',
            cart: cart
        });

    } catch (error) {
        return res.status(500).json({
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