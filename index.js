
const express = require('express');
const app = express();
const cors = require('cors');


// Import Dotenv file
require('dotenv').config()
const PORT = process.env.PORT || 3001


// Import Express JSON Middleware
app.use(express.json());


// Import Routers
const {QRCodeRouter} = require ('./src/router');

// Using Cors
app.use(cors(
    {
        credentials: true,
        origin: ['http://localhost:5173'],
    }
));


// Using Routers
app.use('/api/qrcode', QRCodeRouter);


// Listen The Ports
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

