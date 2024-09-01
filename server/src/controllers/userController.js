import User from '../models/User.js';
import Cart from '../models/Cart.js';
import bcrypt from 'bcrypt';

const userController = {};

userController.signupUser = async (req, res) => {
    const { username, password, rePassword } = req.body;

    // Confirm data
    if (!username || !password || !rePassword) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    //Check password match
    if (password !== rePassword) {
        return res.status(400).json({ message: `Password in signup do not match` });
    }
    //check duplicate username
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Username' });
    }

    //hash password
    const hash = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ userID: username + 'customer', username, password: hash, role: 'customer' });
    if (user) {
        // Check if cart exists
        let cart = await Cart.findOne({ user_id: user.userID }).lean().exec();
        if (!cart) {
            // Create new cart if it doesn't exist
            await Cart.create({ cartID: 'cus' + user.userID, user_id: user.userID });
        }
        return res.status(200).json({ message: `User ${username} created successfully` });
    }
    else {
        return res.status(400).json({ message: 'Invalid user data received' });
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

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        const userInfo = { userID: user.userID, role: user.role, username: user.username };
        Object.assign(req.session, { userInfo });

        return res.status(200).json({ message: 'Login successful', session: req.session.userInfo });
    }
    else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
};

export default userController;