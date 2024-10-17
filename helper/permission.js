const userModel = require("../models/userModel")

const uplaodProductPermission = async (req, res, next) => {

    try {
        const userId = req.user._id
        const user = await userModel.findById(userId)

        if (user.role === 'ADMIN') {
            next()
        } else {
            res.status(403).json({ message: "Permission denied: You are not authorized to upload a product." });
        }

    } catch (error) {

        res.status(500).json(error)

    }


}
module.exports = uplaodProductPermission;