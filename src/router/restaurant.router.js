
const express = require('express');

const router = express.Router();

const RestaurantController = require('../controller/restaurant.controller');


router.post('/createrestaurant', RestaurantController.createRestaurant);
router.get('/', RestaurantController.fetchRestaurants);

module.exports = router;
