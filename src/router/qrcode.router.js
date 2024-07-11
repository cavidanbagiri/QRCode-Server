
const express = require('express');

const router = express.Router();


const QRCodeController = require ('../controller/qrcode.controller');

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.get('/generateqrcode/:url', QRCodeController.generateCode);


module.exports = router;
