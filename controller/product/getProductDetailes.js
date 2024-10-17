const Product = require("../../models/productModel");

const getProductDetails = async (req, res) => {
    try {

        const { productid } = req.body

        const products = await Product.findOne({
            _id: productid
        });

        res.status(200).json({
            data: products,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};

module.exports = getProductDetails;
