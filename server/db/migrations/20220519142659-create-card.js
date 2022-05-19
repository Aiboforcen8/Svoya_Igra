'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic: {
        type: Sequelize.TEXT
      },
      question: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      correct_answer: {
        type: Sequelize.TEXT
      },
      false_answer_1: {
        type: Sequelize.TEXT
      },
      false_answer_2: {
        type: Sequelize.TEXT
      },
      false_answer_3: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  }
};