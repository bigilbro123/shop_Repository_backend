const Cartproduct = require("../../models/CartProduct");

const UpdatecartProd = async (req, res) => {
    try {
        const CurrentUser = req.user._id
        const { addToCartProductId } = req.body;
        const qty = req.body.quantity
        // console.log(qty, addToCartProductId, CurrentUser)
        const updateProduct = await Cartproduct.updateOne(
            { _id: addToCartProductId, userId: CurrentUser },  // Filter
            { quantity: qty }
        );

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
module.exports = UpdatecartProd;