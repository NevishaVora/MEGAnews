const { admin } = require("../models/admin.models.js");
const jwt = require("jsonwebtoken");


const createAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const existUser = await admin.findOne({ email: email?.trim() })
        if (existUser) {
            return res.status(400).json({ message: "Email already exists. Please login." });
        }

        const newAdmin = await new admin({
            username,
            email,
            password,
            token: null
        }).save();

        res.status(201).json({
            message: "Admin created successfully!",
            admin: newAdmin
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const usersData = await admin.findOne();
        if (!usersData) {
            return res.status(400).json({ message: "No admin found. Please register first." });
        }

        const existUser = await admin.findOne({ email: email?.trim() })
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
module.exports = {
    createAdmin,
    loginAdmin,

}