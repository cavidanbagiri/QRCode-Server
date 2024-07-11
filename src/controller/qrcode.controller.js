
const QRCode = require('qrcode');

class QRCodeController {

    static async generateCode(req, res) {

        const test_url = req.params.url;

        QRCode.toDataURL(test_url, (err, url) => {
            if (err) throw err;
            res.status(200).send(url);
        })

    }

}



module.exports = QRCodeController;