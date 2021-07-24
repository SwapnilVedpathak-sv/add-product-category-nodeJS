const mongoose = require("mongoose");
const createProductSchema = new mongoose.Schema({

    category_name: String,
    createdAt: Date,
    updatedAt: Date,
    category_details: [
        {
            product_name: String,
            quantity: Number,
            price: Number,
            createdAt: Date,
            updatedAt: Date,
        }
    ]

});

// New Collection

const ProductsData = new mongoose.model("ProductsData", createProductSchema);

module.exports = ProductsData;
