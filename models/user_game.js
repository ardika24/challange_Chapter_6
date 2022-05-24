"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_game.hasOne(models.User_biodata, {
        foreignKey: { name: "userId", type: DataTypes.UUID },
        as: "user_biodata",
        onDelete: "CASCADE",
      });
    }
  }
  User_game.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_game",
    }
  );
  return User_game;
};
