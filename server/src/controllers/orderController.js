import Order from '../models/Order.js';
//import Cake from '../models/Cake.js';
import moment from 'moment';
const orderController = {};

orderController.getOrderHistory = async (req, res) => {
    try {
        const userID = req.params.userid;
        //const encodedUserID = Buffer.from(userID, 'base64').toString('ascii');
        if (!userID) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide user ID"
            });
        }
        const orderUser = await Order.find({ user_id: userID, status: "completed" }).lean().exec();
        
        // Duyệt qua từng order để lấy thông tin chi tiết về cakes
        // for (let order of orderUser) {
        //     let loopCountCake = 0;
        //     for (let cake of order.cakes) {
        //         // Lấy thông tin chi tiết từ collection cakes
        //         //console.log(cake);
        //         let cake_id_order = cake.cake_id;
        //         const detailedCake = await Cake.findOne({ cakeID: cake_id_order }).lean().exec();
        //         //console.log(detailedCake);
        //         if (detailedCake) {
        //             // Thêm thông tin từ cakes vào đối tượng cake
        //             const cakeInfo = { cakeName: detailedCake.cakeName, price: detailedCake.price, size: detailedCake.size , flavor: detailedCake.jamFilling ,img_url: detailedCake.img_url, };
        //             console.log(cakeInfo);
        //             Object.assign(cake,  cakeInfo );
        //         }
        //         ++loopCountCake;
        //     }
        // }

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

orderController.getOwnOrdered = async (req, res) => {
    try {
        const userID = req.params.userid;
        if (!userID) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide user ID"
            });
        }
        const orderUser = await Order.find({ user_id: userID, status : { $in: ["ordered", "handling","handled","delivered"] }   }).lean().exec();
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
    try{
        const userID = req.params.userid;
        const{formattedDate, address, time} = req.body;
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
export default orderController;