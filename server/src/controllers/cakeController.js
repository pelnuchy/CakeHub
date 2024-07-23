import Cake from "../models/Cake.js";

const cakeController = {};

cakeController.getAllCakes = async (req, res) => {
    try {
        // Sử dụng biểu thức chính quy để tìm kiếm cakeID phù hợp với mẫu mã
        const pattern = /.*-CD-S$/; // Điều này giả định rằng bạn muốn tìm kiếm các ID kết thúc bằng "-CD-S"
        const response = await Cake.find({ cakeID: { $regex: pattern } }).lean().exec();
        if (response.length > 0) {
            return res.status(200).json({
                status: 'SUCCESS',
                data: response
            });
        } else {
            return res.status(404).json({
                status: 'NOT FOUND',
                message: 'No cakes found matching the ID pattern.'
            });

        }
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

cakeController.getAllCakesOccasion = async (req, res) => {
    try {
        const occasion = req.params.occasion;
        if (!occasion) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide occasion"
            });
        }
        const pattern = /.*-CD-S$/; // Điều này giả định rằng bạn muốn tìm kiếm các ID kết thúc bằng "-CD-S"
        const response = await Cake.find({ cakeID: { $regex: pattern }, occasion: occasion }).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: response
        });
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}


cakeController.getDetailCake = async (req, res) => {
    try {
        const cakeid = req.params.id;
        if (!cakeid) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide cake ID"
            });
        }
        // Tạo regex để tìm tất cả bánh có cakeID bắt đầu bằng rootCakeID
        const regex = new RegExp(`^${cakeid}`, 'i'); // 'i' để không phân biệt hoa thường
        // Tìm tất cả bánh phù hợp
        const response = await Cake.find({ cakeID: { $regex: regex } }).lean().exec();
        return res.status(200).json({
            status: 'SUCCESS',
            data: response
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
};
export default cakeController;