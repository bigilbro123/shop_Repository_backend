const Cartproduct = require("../../models/CartProduct");

const AddTocartProduct = async (req, res) => {
    try {
        const { productId } = req?.body;
        const CurrentUser = req.user._id;

        const isProductAval = await Cartproduct.findOne({
            productId,
            userId: CurrentUser
        })

        if (isProductAval) {
            return res.json({
                message: "already exist",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: CurrentUser,
        }
        const newAddToCart = new Cartproduct(payload)
        const saveproduct = await newAddToCart.save()
        res.json({
            data: saveproduct,
            message: "success",
            success: true,
            error: false
        })

    } catch (error) {
        res.status(500).json({
            message: error || error.message
        })
    }
}
module.exports = AddTocartProduct;