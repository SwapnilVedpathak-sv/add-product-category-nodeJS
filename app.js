const express = require('express')
const mongoose = require('mongoose')
const app = express();
require("./connection/dbConnection");
const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
    console.log(`Connection is setup at ${PORT}`);
  });