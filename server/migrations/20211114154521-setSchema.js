"use strict";

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => [
    queryInterface.createTable("Projects", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      creator: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      assignee: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      documents: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
    queryInterface.createTable("Accesses", {
      accessCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      adminAccessCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }),
    queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      adminAccess: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      projectAccess: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      notifications: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      notificationTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  ],

  down: async (queryInterface, Sequelize) => [
    queryInterface.dropTable("project"),
    queryInterface.dropTable("access"),
    queryInterface.dropTable("users"),
  ],
};
