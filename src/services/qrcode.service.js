
const QRCode = require('qrcode');
const { RestaurantURLSModels } = require('../../models');

class GenerateQRCodeService {


    static async generateQRCode(data) {
        const urlcode = data.urlcode + '/' + data.subtitle.toLowerCase().trim();
        let returning_url = null;
        try {
            const result = await this.checkSubtitleIsAvailable(data);

            if (result) {
                await QRCode.toDataURL(urlcode)
                    .then(async url => {
                        returning_url = url;
                        await RestaurantURLSModels.create({
                            subtitle: data.subtitle.toLowerCase().trim(),
                            urlcode: returning_url,
                            restaurantId: data.restaurantId
                        });
                    }).catch(err => {
                        console.log('Error Happen : ', err);
                    })
            }
            else{
                throw new Error('1 - this subtitle is available');
            }
        } catch (err) {
            throw new Error('2 - this subtitle is available');
            console.error(err)
        }
        return returning_url;
    }

    static async checkSubtitleIsAvailable(data) {
        const result = await RestaurantURLSModels.findOne({
            where: {
                restaurantId: data.restaurantId,
                subtitle: data.subtitle.toLowerCase().trim()
            }
        })
        if(result){
            return false
        }
        else{
            return true;
        }
    }

}

module.exports = {
    GenerateQRCodeService
}