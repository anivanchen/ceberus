"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => [
    queryInterface.createDatabase("cerberus"),
  ],

  down: async (queryInterface, Sequelize) => [
    queryInterface.dropDatabase("cerberus"),
  ],
};
