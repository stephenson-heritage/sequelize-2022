'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        queryInterface.changeColumn('Contacts', 'first_name', {
            type: Sequelize.STRING,
            defaultValue: "Luke",
            allowNull: true
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        queryInterface.changeColumn('Contacts', 'first_name', {
            type: Sequelize.STRING,
            defaultValue: null,
            allowNull: true
        });
    }
};