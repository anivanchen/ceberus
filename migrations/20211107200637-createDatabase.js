"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => [
    queryInterface.createDatabase("projectman"),
  ],

  down: async (queryInterface, Sequelize) => [
    queryInterface.dropDatabase("projectman"),
  ],
};
