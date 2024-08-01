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

cakeController.searchCakesByKeyword = async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  const searchCakesByKeyword = async (keyword) => {
    try {
      const regex = new RegExp(keyword, "i");

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


export default cakeController;