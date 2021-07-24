const mongoose = require("mongoose");
const createProductSchema = new mongoose.Schema({

});

// New Collection

const ProductsData = new mongoose.model("ProductsData", createProductSchema);

module.exports = ProductsData;
