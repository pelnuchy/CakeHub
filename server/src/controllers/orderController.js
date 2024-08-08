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
                    cakeQuantity: {
                        $sum: "$cakes.cakeQuantity"
                    },
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

        // Kiểm tra xem giỏ hàng có tồn tại không
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

orderController.getOrderedCake = async (req, res) => {
    try {
        const cakeOrdered = await Order.aggregate([
            { $match: { user_id: "tra1", status: "ordered" } },
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

export default orderController;