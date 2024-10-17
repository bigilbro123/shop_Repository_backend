const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,
        sameSite: "strict", // Helps prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development" // Only set the cookie over HTTPS in production
    });

};

module.exports = generateTokenAndSetCookie;
