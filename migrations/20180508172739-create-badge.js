'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Badges', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    achievements_id: {
      type: Sequelize.UUID
    },
    badge: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Badges')
};