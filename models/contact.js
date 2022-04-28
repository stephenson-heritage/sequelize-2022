'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Contact extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Contact.init({
        first_name: { type: DataTypes.STRING, defaultValue: null, allowNull: true },
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Contact',
    });
    return Contact;
};