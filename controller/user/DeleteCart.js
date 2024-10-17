const Cartproduct = require("../../models/CartProduct");

const DeleteCart = async (req, res) => {
    try {
        const CurrentUser = req.user._id
        const { ProductId } = req.body;


        const updateProduct = await Cartproduct.findOneAndDelete({
            _id: ProductId,
            userId: CurrentUser
        })

        res.status(201).json({
            data: updateProduct,
            success: true,
            error: false
        })
    } catch (error) {
        res.status(500).json({
            message: error || error.message
        })
    }
}
module.exports = DeleteCart