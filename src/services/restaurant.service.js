
const { sequelize, RestaurantModels } = require('../../models');

class CreateRestaurantService {

    static async createRestaurant(data) {
        const new_restaurant = await RestaurantModels.create(data);
        return new_restaurant;
    }

}


class FetchRestaurantService{

    static async fetchRestaurants() {
        const restaurants = await RestaurantModels.findAll({
            attributes: ['id', 'name', 'mainurl']
        });
        return restaurants;
    }
}

module.exports = {
    CreateRestaurantService,
    FetchRestaurantService
}