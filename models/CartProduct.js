const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // Specify the type as ObjectId
        ref: 'products' // Reference to the 'products' collection
    },
    quantity: {
        type: Number,
        required: true // Make it required if necessary
    },
    userId: {
        type: String,
        required: true // Make it required if necessary
    }
}, { timestamps: true });

const Cartproduct = mongoose.model('Cartproduct', cartSchema);

module.exports = Cartproduct;

