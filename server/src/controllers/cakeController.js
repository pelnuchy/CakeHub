import Cake from "../models/Cake.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import "dotenv/config";

import pkg from 'cloudinary';
const { UploadApiResponse, v2: cloudinary } = pkg;

import streamifier from "streamifier";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const runMiddleware = async (req, res, fn) => {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};

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

cakeController.getRelatedCakes = async (req, res) => {
    try {
        const cakeid = req.params.id;
        if (!cakeid) {
            return res.status(400).json({
                status: 'ERROR',
                message: "Please provide cake ID"
            });
        }
        // Sử dụng biểu thức chính quy để tìm kiếm cakeID phù hợp với mẫu mã
        const stringCake = cakeid + "-CD-S";
        const currentCake = await Cake.findOne({ cakeID: stringCake }).lean().exec();

        // Tìm bánh hiện tại để lấy thông tin occasion
        //const currentCake = await Cake.findOne({ cakeID: cakeid }).lean().exec();
        if (!currentCake) {
            return res.status(404).json({
                status: 'ERROR',
                message: "Cake not found"
            });
        }

        const occasion = currentCake.occasion;

        // Tạo regex để tìm tất cả bánh có cakeID có định dạng ...-CD-S nhưng không bắt đầu bằng cakeid
        const regex = new RegExp(`^(?!${cakeid})[^-]+-CD-S$`, 'i'); // 'i' để không phân biệt hoa thường

        // Tìm tất cả bánh có cakeID có định dạng ...-CD-S nhưng không bắt đầu bằng cakeid
        const response = await Cake.find({
            occasion: occasion,
            cakeID: { $regex: regex }
        }).limit(4).lean().exec();

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
}
const createFuzzyRegex = (keyword) => {
    // Chuyển đổi từ khóa thành một chuỗi regex với các ký tự đại diện giữa các ký tự
    const fuzzyKeyword = keyword.split('').join('.*');
    // Tạo regex từ chuỗi đó, không phân biệt chữ hoa chữ thường
    return new RegExp(fuzzyKeyword, "i");
};

cakeController.searchCakesByKeyword = async (req, res) => {
    const { keyword } = req.query;

    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }

    const searchCakesByKeyword = async (keyword) => {
        try {
            const regex = createFuzzyRegex(keyword);

            // Tìm tất cả các bánh có liên quan đến từ khóa
            const cakes = await Cake.find({
                $or: [
                    { cakeName: regex },
                    { jamFilling: regex },
                    { cakeType: regex },
                    { occasion: regex },
                    { description: regex },
                ],
            });

            // Sử dụng Set để lọc các bánh trùng tên
            const seenCakeNames = new Set();
            const uniqueCakes = [];

            cakes.forEach((cake) => {
                if (!seenCakeNames.has(cake.cakeName)) {
                    seenCakeNames.add(cake.cakeName);
                    uniqueCakes.push(cake);
                }
            });

            return uniqueCakes;
        } catch (error) {
            console.error("Error searching cakes:", error);
            throw error;
        }
    };

    try {
        const cakes = await searchCakesByKeyword(keyword);
        res.json({ data: cakes });
    } catch (error) {
        console.error("Error searching cakes:", error);
        res.status(500).json({ error: "Failed to search cakes" });
    }
};

const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "Demo", // Thay đổi tên thư mục tại đây hoặc loại bỏ dòng này để tải lên gốc
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
    });
};
cakeController.addCake = async (req, res) => {
    try {
        // Kiểm tra xem tệp có tồn tại không
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await uploadToCloudinary(req.file);

        // Mảng chứa các hậu tố cần thêm vào mã bánh, `recipeID` tương ứng và kích thước
        const suffixesAndRecipes = [
            { suffix: 'CD-S', recipeID: 'gato_10_chanhday', size: 10, jamFilling: 'Chanh dây' },
            { suffix: 'CD-M', recipeID: 'gato_16_chanhday', size: 16, jamFilling: 'Chanh dây' },
            { suffix: 'CD-L', recipeID: 'gato_24_chanhday', size: 24, jamFilling: 'Chanh dây' },
            { suffix: 'DT-S', recipeID: 'gato_10_strawberry', size: 10, jamFilling: 'Dâu tây' },
            { suffix: 'DT-M', recipeID: 'gato_16_strawberry', size: 16, jamFilling: 'Dâu tây' },
            { suffix: 'DT-L', recipeID: 'gato_24_strawberry', size: 24, jamFilling: 'Dâu tây' },
            { suffix: 'Soco-S', recipeID: 'gato_10_socola', size: 10, jamFilling: 'Socola' },
            { suffix: 'Soco-M', recipeID: 'gato_16_socola', size: 16, jamFilling: 'Socola' },
            { suffix: 'Soco-L', recipeID: 'gato_24_socola', size: 24, jamFilling: 'Socola' },
        ];

        // Mảng chứa giá dựa trên kích thước và dịp
        const prices = [
            { size: 10, occasion: "custom", price: 320000 },
            { size: 16, occasion: "custom", price: 360000 },
            { size: 24, occasion: "custom", price: 400000 },
            { size: 10, occasion: "christmas", price: 345000 },
            { size: 16, occasion: "christmas", price: 385000 },
            { size: 24, occasion: "christmas", price: 425000 },
            { size: 10, occasion: "anniversary", price: 350000 },
            { size: 16, occasion: "anniversary", price: 390000 },
            { size: 24, occasion: "anniversary", price: 430000 },
            { size: 10, occasion: "birthday", price: 335000 },
            { size: 16, occasion: "birthday", price: 375000 },
            { size: 24, occasion: "birthday", price: 415000 }
        ];

        // Lặp qua mảng và tạo các đối tượng bánh mới
        const cakes = suffixesAndRecipes.map(({ suffix, recipeID, size, jamFilling }) => {
            // Tìm giá dựa trên kích thước và dịp
            const priceObj = prices.find(p => p.size === size && p.occasion === req.body.occasion);
            const price = priceObj ? priceObj.price : 0; // Giá mặc định là 0 nếu không tìm thấy

            return {
                cakeID: `${req.body.id}-${suffix}`,
                cakeName: req.body.name,
                occasion: req.body.occasion,
                img_url: result.secure_url,
                description: req.body.description,
                recipe_id: recipeID,
                size: size,
                jamFilling: jamFilling, // Thêm thông tin về jamFilling
                price: price,
            };
        });

        // Lưu từng đối tượng bánh vào cơ sở dữ liệu
        for (const cakeData of cakes) {
            const newCake = new Cake(cakeData);
            await newCake.save();
        }

        res.status(200).json({ message: "Cake added successfully" });
    } catch (error) {
        // Trả về thông báo lỗi chi tiết
        res.status(500).json({ message: "Image upload failed", error: error.message });
    }
};


cakeController.getAllCakesManageCake = async (req, res) => {
    try {
        // Sử dụng biểu thức chính quy để tìm kiếm cakeID phù hợp với mẫu mã
        const pattern = /.*-CD-S$/; // Điều này giả định rằng bạn muốn tìm kiếm các ID kết thúc bằng "-CD-S"
        const processResponse = await Cake.find({ cakeID: { $regex: pattern } })
            .sort({ cakeID: 1 }) // Sắp xếp tăng dần theo cakeID
            .lean()
            .exec();
        if (processResponse.length > 0) {
            // Tách cakeID và cập nhật giá trị của nó
            const response = processResponse.map(cake => {
                cake.cakeID = cake.cakeID.split('-')[0];
                return cake;
            });

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
    }
    catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

cakeController.deleteCake = async (req, res) => {
    try {
        const cakeID = req.params.id;
        if (!cakeID) {
            return res.status(400).json({
                status: 'ERROR',
                message: "Please provide cake ID"
            });
        }

        // Kiểm tra trong giỏ hàng
        const cartExists = await Cart.findOne({ 'cakes.cake_id': { $regex: `^${cakeID}` } }).lean().exec();
        if (cartExists) {
            return res.status(400).json({
                status: 'ERROR',
                message: "Không thể xóa bánh. Nó tồn tại trong giỏ hàng."
            });
        }

        // Kiểm tra trong đơn hàng
        const orderExists = await Order.findOne({ 'cakes.cake_id': { $regex: `^${cakeID}` } }).lean().exec();
        if (orderExists) {
            return res.status(400).json({
                status: 'ERROR',
                message: "Không thể xóa bánh. Nó tồn tại trong đơn hàng."
            });
        }

        // Sử dụng biểu thức chính quy để tìm tất cả các cakeID bắt đầu bằng giá trị cụ thể
        const response = await Cake.deleteMany({ cakeID: { $regex: `^${cakeID}` } }).lean().exec();
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
export default cakeController;