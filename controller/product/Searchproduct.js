const Product = require("../../models/productModel");

const searchProduct = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ message: "Query parameter 'q' is required." });
        }
        const regex = new RegExp(query, 'i'); // No need for 'g' flag in the regex
        const product = await Product.find({
            "$or": [
                { productName: regex },
                { category: regex }
            ]
        });
        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};

module.exports = searchProduct;
