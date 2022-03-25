'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      birth_date: {
        type: Sequelize.DATE
      },
      sex: {
        type: Sequelize.CHAR
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      about: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      knowledges: {
        allowNull: true,
        type: Sequelize.STRING
      },
      social: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      academic: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      profile_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  }
};
