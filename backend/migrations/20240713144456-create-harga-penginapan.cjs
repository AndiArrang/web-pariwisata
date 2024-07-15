'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Harga_penginapans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_penginapan: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'penginapans',
          key: 'id_penginapan'
        }
      },
      min_org: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      max_org: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      harga: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Harga_penginapans');
  }
};