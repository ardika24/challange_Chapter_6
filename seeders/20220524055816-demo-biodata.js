"use strict";
const { NIL: NIL_UUID, v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User_biodata",
      [
        {
          fullname: "Super Admin",
          birthdate: new Date(),
          address: "central java",
          createdAt: new Date(),
          userId: NIL_UUID,
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User_bidata", null, {});
  },
};
