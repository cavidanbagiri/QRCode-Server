'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantURLSModels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({RestaurantURLSModels}) {
      // define association here
      this.hasOne(RestaurantURLSModels, {foreignKey: 'restaurantId'});
    }
  }
  RestaurantURLSModels.init({

    subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlcode: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'RestaurantURLSModels',
    modelName: 'RestaurantURLSModels',
  });
  return RestaurantURLSModels;
};