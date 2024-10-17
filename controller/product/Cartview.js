const Cartproduct = require("../../models/CartProduct");

const Cartview = async (req, res) => {
    try {
        const currentuser = req.user._id
        const productCart = await Cartproduct.find({
            userId: currentuser
        }).populate('productId')
        res.status(200).json({
            data: productCart,
            success: true
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: error.message
        });
    }
}
module.exports = Cartview;