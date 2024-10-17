const Product = require("../../models/productModel");

const CategoryWiseProduct = async (req, res) => {
    try {
        // Check for categorys in the request body
        const { categorys } = req.body; // Assuming it's sent in the request body

        if (!categorys) {
            return res.status(400).json({
                message: "categorys field is required."
            });
        }

        // console.log("Received categorys:", categorys);

        // Fetch products based on category
        const products = await Product.find({ category: categorys });

        res.status(200).json({
            data: products
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = CategoryWiseProduct;
