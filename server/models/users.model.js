const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      adminAccess: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      projectAccess: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      notifications: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      notificationTime: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Users",
    }
  );

  return Users;
};
