
const express = require('express');

const router = express.Router();


const QRCodeController = require ('../controller/qrcode.controller');

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/generateqrcode', QRCodeController.generateQRCode);


module.exports = router;
