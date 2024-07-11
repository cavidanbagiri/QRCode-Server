
const QRCode = require('qrcode');

const tryCatch = require('../utils/tryCatch');
const { GenerateQRCodeService } = require('../services/qrcode.service');

class QRCodeController {

    static async generateQRCode(req, res) {

        const test_url = req.params.url;

        tryCatch(
            await GenerateQRCodeService.generateQRCode(test_url)
            .then((respond)=>{
                res.status(201).send(respond);
            }).catch((err)=>{
                res.status(400).send(err);
            })
        )

    }

}



module.exports = QRCodeController;