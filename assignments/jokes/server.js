require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require("./config/mongoose.config");
    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/jokes.route')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));