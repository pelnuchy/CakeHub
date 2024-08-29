import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
    {
        deviceID: { type: String, required: true },
        deviceModel: { type: String, required: true },
        deviceName: { type: String, required: true },
        volume: { type: String, required: true },
        quantity: { type: Number, required: true },
        deviceType: { type: String, required: true },
        managerID: { type: String, required: true },
    },
    {
        timestamps: true
    }
);
const Device = mongoose.model('devices', deviceSchema);
export default Device;