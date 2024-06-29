import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
    userID: {type: String,required: true},
    username: {type: String,required: true},
    password: {type: String,required: true},
    role: {type: String,required: true}
    },
    { 
        timestamps: true
    }
);
const User = mongoose.model('users', userSchema);
export default User;