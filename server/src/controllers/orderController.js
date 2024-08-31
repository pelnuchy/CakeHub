import Order from '../models/Order.js';
import moment from 'moment-timezone';
const orderController = {};

orderController.createOrder = async (req, res) => {
    try {
        const { orderDetail } = req.body;
        if (!orderDetail) {
            return res.status(401).json({
                status: 'ERROR',
                message: "Please fill in order information"
            });
        }
        const order = new Order(orderDetail);
        await order.save();
        return res.status(200).json({
            status: 'SUCCESS',
            data: order
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

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
            },
            { $sort: { completeTime: -1 } } // Sắp xếp giảm dần theo completeTime
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
        const time = req.query.time;
        if (!orderID) {
            return res.status(404).json({
                status: 'ERROR',
                message: "Please provide order ID"
            });
        }
        const updateOrder = await Order.updateOne(
            { _id: orderID, status: "delivering" },
            { status: "completed", completeTime: time }
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
            { $match: { user_id: userID, status: { $in: ["ordered", "handling_1", "handling_2", "delivering"] } } },
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
            },
            { $sort: { shippingDate: -1 } } // Sắp xếp giảm dần theo completeTime
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
                    ingredPerQuantity: { $first: "$ingredientDetail.ingredientPerQuantity" },
                    ingredUnit: { $first: "$ingredientDetail.ingredientUnit" },
                    ingredPrice: { $first: "$ingredientDetail.ingredientPerPrice" },
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
                            perQuantity: "$ingredPerQuantity",
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
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

        const cakeOrdered = await Order.aggregate([
            {
                $match: {
                    status: status,
                    shippingDate: { $gte: startOfDay, $lte: endOfDay }
                }
            },
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
        ]);

        return res.status(200).json({
            status: 'SUCCESS',
            data: cakeOrdered
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
};

orderController.getHandlingCake = async (req, res) => {
    try {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

        const cakeOrdered = await Order.aggregate([
            {
                $match: {
                    status: { $in: ["handling_1", "handling_2"] },
                    shippingDate: { $gte: startOfDay, $lte: endOfDay } // nếu muốn từ hôm nay trở về trc đó thì bỏ startOfDay
                }
            },
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
                    shippingDate: { $first: "$shippingDate" },
                    status: { $first: "$status" },
                    cakes: { $push: "$cakes" }
                }
            }
        ]);
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
            { _id: orderID },
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
};


orderController.checkNumberOfCakesAllOrder = async (req, res) => {
    try {
        const date = new Date(req.query.dateSelected); // Lấy ngày từ query parameters
        const orders = await Order.aggregate([
            {
                $match: {
                    $expr: {
                        $and: [
                            { $eq: [{ $dayOfMonth: "$shippingDate" }, { $dayOfMonth: date }] },
                            { $eq: [{ $month: "$shippingDate" }, { $month: date }] },
                            { $eq: [{ $year: "$shippingDate" }, { $year: date }] }
                        ]
                    }
                }
            }
        ]);
        // Khởi tạo mảng với 6 phần tử, mỗi phần tử đại diện cho một khung giờ
        const cakeQuantities = [0, 0, 0, 0, 0, 0];

        // Duyệt qua từng đơn hàng trong mảng orders
        orders.forEach(order => {
            // hàm getHours() trả về giờ của ngày, nó tự +7 theo múi giờ UTC+0
            //getUTCHours() trả về giờ của ngày, không cộng
            const shippingHour = order.shippingDate.getHours(); 

            // Kiểm tra giờ và cộng số lượng bánh vào phần tử tương ứng trong mảng
            if (shippingHour >= 13 && shippingHour <= 18) {
                const index = shippingHour - 13;
                cakeQuantities[index] += order.s_cakeQuantity;
            }
        });

        //const result = cakeQuantities.map(quantity => quantity <= 8 ? true : false);

        return res.status(200).json({
            status: 'SUCCESS',
            data: cakeQuantities
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
};
export default orderController;