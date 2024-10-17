const userModel = require("../models/userModel");


const userDetail = async (req, res) => {
    try {
        // console.log('user name' + req.user.name);
        // console.log('user._id' + req.user._id);
        // console.log('user email' + req.user.email);

        const user = await userModel.findById(req.user._id).select("-password")
        // console.log(user);

        res.status(200).json({
            data: user,
            success: true,
            error: false,
        })

    } catch (error) {
        res.status(500).json({
            message: error || error.message
        })
    }
}
module.exports = userDetail;