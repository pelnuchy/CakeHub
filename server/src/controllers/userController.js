import User from '../models/User.js';

const userController = {};

userController.signupUser = async (req, res) => {
    const { username, password, rePassword } = req.body;

    // Confirm data
    if (!username || !password || !rePassword) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    //Check password match
    if (password !== rePassword) {
        console.log(password,rePassword);
        return res.status(400).json({ message: `Password in signup do not match` });
    }
    //check duplicate username
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Username' });
    }

    // Create new user
    const user = await User.create({ userID : 'kh', username, password, role: 'customer'});
    if (user) {
        res.status(201).json({ message: `User ${username} created successfully` });
    }
    else {
        res.status(400).json({ message: 'Invalid user data received' });
    }


};

userController.loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Confirm data
    if (!username || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Check user
    const user = await User.findOne({ username }).lean().exec();
    //console.log(user);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }


    // Check password
    if (password === user.password) {
        return res.status(200).json({ message: 'Login successful' });
    }
    else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

};

export default userController;