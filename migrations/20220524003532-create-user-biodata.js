"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User_biodata", {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "User_games",
          key: "id",
          as: "userId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User_biodata");
  },
};
