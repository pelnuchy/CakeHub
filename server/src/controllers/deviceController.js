import Device from '../models/Device.js';

const deviceController = {};

deviceController.getAllDevices = async (req, res) => {
    try {
        const listDevices = await Device.aggregate([
            {
                $group: {
                    _id: null,
                    devices: {
                        $push: {
                            deviceID: "$deviceID",
                            deviceModel: "$deviceModel",
                            deviceName: "$deviceName",
                            volume: "$volume",
                            quantity: "$quantity",
                            deviceType: "$deviceType",
                            managerID: "$managerID"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    devices: 1
                }
            }
        ]);
        if (!listDevices) {
            return res.status(404).json({ message: 'No devices found!' });
        }


        return res.status(200).json({
            status: 'SUCCESS',
            data: listDevices
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

deviceController.addDevice = async (req, res) => {
    try {
        const { device } = req.body;

        const newDevice = await Device.create(
            {
                deviceID: device.id,
                deviceModel: device.brand,
                deviceName: device.name,
                volume: device.volume,
                quantity: device.quantity,
                deviceType: device.category,
                managerID: device.idmanager
            }
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Quantity of device updated successfully',
            device: newDevice
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

deviceController.updateQuantityDevice = async (req, res) => {
    try {
        const deviceID = req.params.device_id;
        const newQuantity = req.query.newQuantity;

        if (!deviceID || !newQuantity) {
            return res.status(400).json({
                status: 'ERROR',
                message: 'Missing required parameters'
            });
        }

        const device = await Device.updateOne(
            { deviceID: deviceID },
            {
                $set: {
                    quantity: newQuantity
                }
            }
        );

        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Quantity of device updated successfully',
            device: device
        });

    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}

deviceController.deleteDevice = async (req, res) => {
    try {
        const device_id = req.params.id;
        const device = await Device.deleteOne({ deviceID: device_id });
        return res.status(200).json({
            status: 'SUCCESS',
            message: 'Device removed successfully',
            device: device
        });
    } catch (error) {
        return res.status(404).json({
            status: 'ERROR',
            message: error.message
        });
    }
}



export default deviceController;