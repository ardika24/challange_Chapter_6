"use strict";
const { NIL: NIL_UUID, v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User_games",
      [
        {
          id: NIL_UUID,
          username: "admin",
          password: "admin",
          status: "super",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          username: "demo",
          password: "demo",
          status: "player",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User_games", null, {});
  },
};
