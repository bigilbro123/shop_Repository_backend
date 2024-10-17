const Product = require("../../models/productModel")

const getcategory = async (req, res) => {
    try {


        const product = await Product.distinct("category")


        // console.log("category" + product);

        const producCategory = []
        for (const category of product) {
            const products = await Product.findOne({ category: category })
            if (products) {
                producCategory.push(products)
            }
        }
        res.status(200).json(producCategory)


    } catch (error) {
        res.status(500).json({
            message: error || error.message
        })
    }
}
module.exports = getcategory