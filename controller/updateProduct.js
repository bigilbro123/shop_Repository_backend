const Product = require("../models/productModel");


const UpdateProduct = async (req, res) => {


    try {
        const { _id, ...resBody } = req.body
        const uudateproduct = await Product.findByIdAndUpdate(_id, resBody)

        res.status(201).json({
            message: "product updated",
            success: true
        })




    } catch (error) {

        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }

}
module.exports = UpdateProduct;