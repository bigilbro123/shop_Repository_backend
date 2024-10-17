const userModel = require('../models/userModel')


const Alluser = async (req, res) => {

    try {
        // console.log("userId", req.user._id);
        const data = await userModel.find().select("-password")

        if (!data) console.log("no record");

        res.status(200).json({ data: data })


    } catch (error) {
        res.status(500).json({
            message: error || error.message
        })
    }

}
module.exports = Alluser