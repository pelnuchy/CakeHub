import Device from '../models/Device.js';

const deviceController = {};

deviceController.getAllDevices = async (req, res) => {
    try {
        const listDevices = await Device.find().lean().exec();
        if (listDevices.length > 0) {
            return res.status(200).json({
                status: 'SUCCESS',
                data: listDevices
            });
        }
        else {
            return res.status(404).json({
                status: 'NOT FOUND',
                message: 'NO DEVICE WAS FOUND'
            });
        }
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

export default deviceController;