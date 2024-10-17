
const generateTokenAndSetCookie = require('../middleware/lib/GenerateJWT.js');
var jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js')
const bcrypt = require('bcryptjs');

const userSigninController = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error("Email or password missing");
        }

        const userLOGIN = await userModel.findOne({ email });
        if (!userLOGIN) {
            return res.status(404).json({ error: "User not found" });
        } else if (!(await bcrypt.compare(password, userLOGIN.password))) {
            return res.status(400).json({ error: "Password is incorrect" });
        }

        const userdetail = {
            _id: userLOGIN._id,
            name: userLOGIN.name,
            email: userLOGIN.email
        };

        const token = jwt.sign({ userdetail }, process.env.JWT_SECRET, { expiresIn: '15d' });

        const tokenOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure flag only for production
            sameSite: 'Strict'
        };

        res.cookie('jwt', token, tokenOptions).json({
            message: "Login successful",
            data: userdetail,
            maxAge: 15 * 24 * 60 * 60 * 1000,
            success: true,
            error: false
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || "An error occurred during login",
            LOGIN: false,
        });
    }
};

module.exports = userSigninController;


//