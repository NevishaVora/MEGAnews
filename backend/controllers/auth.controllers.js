const { auth } = require('../models/auth.models');
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const existUser = await auth.findOne({ email: email?.trim() })
        if (existUser) {
            return res.status(400).json({ message: "Email already exists. Please login." });
        }

        const newUser = await new auth({
            username,
            email,
            password,
            token: null
        }).save();

        res.status(201).json({
            message: "User created successfully!",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const loginUsers = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const usersData = await auth.findOne();
        if (!usersData) {
            return res.status(400).json({ message: "No users found. Please register first." });
        }

        const existUser = await auth.findOne({ email: email?.trim() })
        if (!existUser) {
            return res.status(400).json({ message: "Email not exists. Please Sign up." });
        }

        // const user = usersData.users.find(u => u.email === email);
        // if (!user) {
        //     return res.status(400).json({ message: "Invalid email. Please register first." });
        // }
        console.log("== existUser ==>", existUser);

        let accessToken = jwt.sign(
            {
                email: existUser.email,
                username: existUser.username
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "2d" }
        );

        console.log("== accessToken ==>", accessToken);

        existUser.token = accessToken;
        await existUser.save();

        res.status(200).json({ message: "Login successful", accessToken, existUser });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getUserData = async (req, res) => {
    try {
        const usersData = await auth.find(); // Sabhi users ko fetch karega
        console.log("🚀 ~ getUserData ~ usersData:", usersData)
        if (!usersData || usersData.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createUser,
    loginUsers,
    getUserData
}