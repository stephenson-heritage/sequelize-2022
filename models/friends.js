'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Friends.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birthday: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Friends',
  });
  return Friends;
};