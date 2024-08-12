import Order from '../models/Order.js';
//import Cake from '../models/Cake.js';
import moment from 'moment';
const orderController = {};

orderController.getOrderHistory = async (req, res) => {
    try {
        const userID = req.params.userid;
        if (!userID) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide user ID"
            });
        }

        const orderUser = await Order.aggregate([
            { $match: { user_id: userID, status: "completed" } },
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
                    "cakes.cakeName": "$cakeDetail.cakeName",
                    "cakes.size": "$cakeDetail.size",
                    "cakes.img_url": "$cakeDetail.img_url",
                    "cakes.flavor": "$cakeDetail.jamFilling"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    orderID: { $first: "$orderID" },
                    shippingDate: { $first: "$shippingDate" },
                    shippingAddress: { $first: "$shippingAddress" },
                    orderTime: { $first: "$orderTime" },
                    paymentTime: { $first: "$paymentTime" },
                    completeTime: { $first: "$completeTime" },
                    total_price: { $first: "$total_price" },
                    status: { $first: "$status" },
                    user_id: { $first: "$user_id" },
                    s_cakeQuantity: { $first: "$s_cakeQuantity" },
                    cakes: { $push: "$cakes" }
                }
            }
        ]);

        return res.status(200).json({
            status: 'SUCCESS',
            data: orderUser
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.updateComletedOrder = async (req, res) => {
    try {
        const orderID = req.params.orderid;
        if (!orderID) {
            return res.status(404).json({
                status: 'ERROR',
                message: "Please provide order ID"
            });
        }
        const updateOrder = await Order.updateOne(
            { orderID: orderID, status: "delivering" },
            { status: "completed" }
        ).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: updateOrder
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
};

orderController.getOwnOrdered = async (req, res) => {
    try {
        const userID = req.params.userid;
        if (!userID) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide user ID"
            });
        }
        const orderUser = await Order.aggregate([
            { $match: { user_id: userID, status: { $in: ["ordered", "handling", "delivering"] } } },
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
                    "cakes.cakeName": "$cakeDetail.cakeName",
                    "cakes.size": "$cakeDetail.size",
                    "cakes.img_url": "$cakeDetail.img_url",
                    "cakes.flavor": "$cakeDetail.jamFilling"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    orderID: { $first: "$orderID" },
                    shippingDate: { $first: "$shippingDate" },
                    shippingAddress: { $first: "$shippingAddress" },
                    orderTime: { $first: "$orderTime" },
                    paymentTime: { $first: "$paymentTime" },
                    completeTime: { $first: "$completeTime" },
                    total_price: { $first: "$total_price" },
                    status: { $first: "$status" },
                    user_id: { $first: "$user_id" },
                    s_cakeQuantity: { $first: "$s_cakeQuantity" },
                    cakes: { $push: "$cakes" }
                }
            }
        ]);
        return res.status(200).json({
            status: 'SUCCESS',
            data: orderUser
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.getInfoOrdering = async (req, res) => {
    try {
        const userID = req.params.userid;
        if (!userID) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide user ID"
            });
        }
        const orderUser = await Order.find({ user_id: userID, status: { $exists: false } }).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: orderUser
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.orderCheckout = async (req, res) => {
    try {
        const userID = req.params.userid;
        const { formattedDate, address, time } = req.body;
        if (!formattedDate || !address || !time) {
            return res.status(401).json({
                status: 'ERROR',
                message: "Please fill in checkout information"
            });
        }
        const formattedShipDateTime = `${formattedDate} ${time}`;
        const shippingDates = moment.utc(formattedShipDateTime,
            'MM/DD/YYYY HH:mm'
            // 'MM/DD/YY HH:mm',
            // 'YY/MM/DD HH:mm',
            // 'YYYY-MM-DD HH:mm',
            // 'YYYY-MM-DDTHH:mm:ss.SSSZ', // ISO 8601 format
        ).toDate(); //Convert back to Date object in UTC
        const orderCheckout = await Order.updateOne(
            { user_id: userID, status: { $exists: false } }, // Điều kiện cập nhật
            { shippingDate: new Date(shippingDates), shippingAddress: address } // Thông tin cập nhật
        ).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: orderCheckout,
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.getListCakesSold = async (req, res) => {
    try {
        const cakeSold = await Order.aggregate([
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
                    cakes: {
                        $mergeObjects: [
                            "$cakes",
                            {
                                cakeName: "$cakeDetail.cakeName",
                                img_url: "$cakeDetail.img_url",
                                completeTime: "$completeTime"
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        cakeName: "$cakes.cakeName",
                        completeTime: "$cakes.completeTime" // Group theo cake_id và completeTime
                    },
                    cakeName: { $first: "$cakes.cakeName" },
                    img_url: { $first: "$cakes.img_url" },
                    cakeQuantity: { $sum: "$cakes.cakeQuantity" },
                    total_price: { $sum: "$cakes.total_price" },
                    completeTime: { $first: "$completeTime" }
                }
            },
            {
                $group: {
                    _id: null,
                    cakes: {
                        $push: {
                            cakeName: "$cakeName",
                            img_url: "$img_url",
                            cakeQuantity: "$cakeQuantity",
                            total_price: "$total_price",
                            completeTime: "$completeTime"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    cakes: 1
                }
            }
        ]

        );

        if (!cakeSold) {
            return res.status(404).json({ message: 'No cake sold!' });
        }


        return res.status(200).json({
            status: 'SUCCESS',
            data: cakeSold
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.getListIngredientsSold = async (req, res) => {
    try {
        const ingredientSold = await Order.aggregate([
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
                $lookup: {
                    from: "recipes",
                    localField: "cakeDetail.recipe_id",
                    foreignField: "recipeID",
                    as: "recipeDetail"
                }
            },
            {
                $lookup: {
                    from: "ingredients",
                    localField: "recipeDetail.ingredients.ingredID",
                    foreignField: "ingredientID",
                    as: "ingredientDetail"
                }
            },
            { $unwind: "$recipeDetail" },
            { $unwind: "$recipeDetail.ingredients" },
            { $unwind: "$ingredientDetail" },
            {
                $match: {
                    $expr: {
                        $eq: [
                            "$recipeDetail.ingredients.ingredID",
                            "$ingredientDetail.ingredientID"
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        ingredID: "$recipeDetail.ingredients.ingredID",
                        completeTime: "$completeTime"
                    },
                    ingredID: { $first: "$recipeDetail.ingredients.ingredID" },
                    ingredName: { $first: "$ingredientDetail.ingredientName" },
                    ingredQuantity: { $sum: "$recipeDetail.ingredients.ingredQuantity" },
                    ingredUnit: { $first: "$ingredientDetail.ingredientUnit" },
                    ingredPrice: { $first: "$ingredientDetail.ingredientPrice" },
                    completeTime: { $first: "$completeTime" }
                }
            },
            {
                $group: {
                    _id: null,
                    ingredients_list: {
                        $push: {
                            name: "$ingredName",
                            quantity: "$ingredQuantity",
                            unit: "$ingredUnit",
                            price: "$ingredPrice",
                            time: "$completeTime"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    ingredients_list: 1
                }
            }
        ]

        );

        if (!ingredientSold) {
            return res.status(404).json({ message: 'No ingredients sold!' });
        }


        return res.status(200).json({
            status: 'SUCCESS',
            data: ingredientSold
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

orderController.getOrderedCake = async (req, res) => {
    try {
        const status = req.query.status;
        const cakeOrdered = await Order.aggregate([
            { $match: { status: status } },
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
                    "cakes.cakeName": "$cakeDetail.cakeName",
                    "cakes.size": "$cakeDetail.size",
                    "cakes.img_url": "$cakeDetail.img_url",
                    "cakes.flavor": "$cakeDetail.jamFilling"
                }
            },
            {
                $project: {
                    "cakes.total_price": 0
                }
            },
            {
                $group: {
                    _id: "$_id",
                    orderID: { $first: "$orderID" },
                    cakes: { $push: "$cakes" }
                }
            }
        ]

        );

        return res.status(200).json({
            status: 'SUCCESS',
            data: cakeOrdered
        }
        );
    }

    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
};


orderController.updateStatusOrder = async (req, res) => {
    try {
        const orderID = req.params.orderid;
        const status = req.query.status;
        if (!orderID || !status) {
            return res.status(404).json({
                status: 'ERROR',
                message: "Please provide order ID and status"
            });
        }
        const updateOrder = await Order.updateOne(
            { orderID: orderID },
            { status: status }
        ).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: updateOrder
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

export default orderController;