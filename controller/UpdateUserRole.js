const userModel = require("../models/userModel");

const UpadeteUser = async (req, res) => {
    try {
        const { userId, email, name, role } = req.body;
        const payload = {
            ...(email && { email }),
            ...(name && { name }),
            ...(role && { role })
        };

        const updateuser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        if (updateuser) {
            res.status(201).json({
                data: updateuser,
                message: "User role updated successfully",
                success: true,
                error: false
            });
        } else {
            res.status(404).json({
                message: "User not found",
                success: false,
                error: true
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};

module.exports = UpadeteUser;
