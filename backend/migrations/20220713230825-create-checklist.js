'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('checklists', {
      checklist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      checklist_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      checklist_favorited: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('checklists');
  }
};