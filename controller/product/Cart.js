const { json } = require("express")
const Cartproduct = require("../../models/CartProduct")

const Cart = async (req, res) => {
    try {

        const userId = req.user._id

        const productCart = await Cartproduct.countDocuments({
            userId: userId
        })
        res.status(200).json(
            {
                data: productCart
            }

        )

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: error.message
        });

    }
}
module.exports = Cart;