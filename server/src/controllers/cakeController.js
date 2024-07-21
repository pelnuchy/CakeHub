import Cake from "../models/Cake.js";

const cakeController = {};

cakeController.getAllCakes = async (req, res) => {
    try {
        const response = await Cake.find().lean().exec();
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

cakeController.getAllCakesOccasion = async (req, res) => {
    try {
        const occasion = req.params.occasion;
        if (!occasion) {
            return res.status(200).json({
                status: 'ERROR',
                message: "Please provide occasion"
            });
        }
        const response = await Cake.find({ occasion: occasion }).lean().exec();
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
        const response = await Cake.findOne({ cakeID: cakeid }).lean().exec();
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