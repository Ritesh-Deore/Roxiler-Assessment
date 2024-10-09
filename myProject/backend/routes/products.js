// routes/products.js
const express = require('express');
const axios = require('axios');
const Product = require('../models/product');

const router = express.Router();

// API to initialize the database
router.get('/init', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;

        await Product.deleteMany({});
        await Product.insertMany(data);

        res.json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to initialize database' });
    }
});

// Other APIs (transactions, statistics, bar chart, pie chart, combined)
// Implement the rest of your APIs here as provided in the previous message

module.exports = router;
