const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {}

  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      creator: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      assignee: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      documents: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Project",
    }
  );

  return Project;
};
