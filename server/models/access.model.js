const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Access extends Model {}

  Access.init(
    {
      accessCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adminAccessCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Access",
    }
  );

  return Access;
};
