// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    price: Number,
    sold: Boolean,
    dateOfSale: Date
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
