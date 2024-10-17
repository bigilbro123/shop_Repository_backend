const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    productImage: {
        type: [String], // Array of strings for multiple images
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    selling: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('products', productSchema);

module.exports = Product;
