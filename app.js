const express = require('express');
const app = express();
const mongoose = require("mongoose");
var router = express.Router();
const header = require("./middleware/header");
const AddProduct = require('./routes/add-product')
require("./connection/dbConnection");
const PORT = process.env.PORT || 8000;

app.use(header);
app.use('/', AddProduct);
app.use('/', AddProduct);
app.use('/', AddProduct);
app.use('/', AddProduct);
app.use('/', AddProduct);
app.use('/', AddProduct);


app.listen(PORT, () => {
  console.log(`Connection is setup at ${PORT}`);
});