const { CreateRestaurantService, FetchRestaurantService } = require("../services/restaurant.service");
const tryCatch = require("../utils/tryCatch")


class RestaurantController{

    static async createRestaurant(req, res, next){
        const data = req.body;
        tryCatch(
            await CreateRestaurantService.createRestaurant(data)
            .then((respond)=>{
                res.send(respond);
            }).catch((err)=>{
                console.log('Create new Restaurant Error : ', err);
                next(err);
            })
        )
    }


    static async fetchRestaurants(req, res, next){
        tryCatch(
            await FetchRestaurantService.fetchRestaurants()
            .then((respond)=>{
                res.send(respond);
            }).catch((err)=>{
                console.log('Create new Restaurant Error : ', err);
                next(err);
            })
        )

    }

}

module.exports = RestaurantController