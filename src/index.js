const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose  = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

// const uri  = process.env.ATLAS_URI;
// mongoose.connect(uri);

app.listen(5000, () => {

    // console.log('Server is running on port 5000');
    console.log('Server is running on port 5000');
}
);
