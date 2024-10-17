const Product = require("../models/productModel");



const productController = async (req, res) => {
    try {


        const allproduct = await Product.find()

        res.status(200).json({
            data: allproduct
        })


    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
}
module.exports = productController;