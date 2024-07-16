
const QRCode = require('qrcode');

const tryCatch = require('../utils/tryCatch');
const { GenerateQRCodeService } = require('../services/qrcode.service');

class QRCodeController {

    static async generateQRCode(req, res) {

        const data = req.body;

        tryCatch(
            await GenerateQRCodeService.generateQRCode(data)
            .then((respond)=>{
                console.log('enter respond');
                res.status(201).send(respond);
            }).catch((err)=>{
                console.log('enter error');
                res.status(400).send(err);
            })
        )

    }

}



module.exports = QRCodeController;