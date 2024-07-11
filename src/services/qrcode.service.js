
const QRCode = require('qrcode');

class GenerateQRCodeService {


    static async generateQRCode(entering_url) {
        let returning_url = null;
        try {
            await QRCode.toDataURL(entering_url)
            .then(url=>{
                returning_url = url;
            }).catch(err=>{
                console.log('Error Happen : ', err);
            })
        } catch (err) {
            console.error(err)
        }
        return returning_url;
    }

}

module.exports = {
    GenerateQRCodeService
}