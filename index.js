
const express = require('express');
const app = express();
const cors = require('cors');


// Import Sequeelize
const { sequelize } = require('./models');


// Import Dotenv file
require('dotenv').config()
const PORT = process.env.PORT || 3001


// Import Express JSON Middleware
app.use(express.json());


// Import Routers
const { QRCodeRouter, UserRouter } = require('./src/router');


// Using Cors
app.use(cors(
    {
        credentials: true,
        origin: ['http://localhost:5173'],
    }
));


// Using Routers
app.use('/api', QRCodeRouter);
app.use('/api/user', UserRouter);


// Starting Database and backend project
const startApp = async () => {

    try {

        try {
            await sequelize.authenticate();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        app.listen(PORT, () => {
            console.log('server listening on : ', PORT);
        });

    }
    catch (err) {
        console.log('Internal Server Error : ', err);
    }

}

startApp();