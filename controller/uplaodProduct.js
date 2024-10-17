const Product = require("../models/productModel");


const UploadProductController = async (req, res) => {


    try {
        const product = new Product(req.body)
        const saveproduct = await product.save()

        res.status(201).json({
            message: "product created",
            product: saveproduct
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });

    }




}

module.exports = UploadProductController;