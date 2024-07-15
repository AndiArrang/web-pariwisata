'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paket_penginapans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_paket: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pakets',
          key: 'id_paket'
        }   
      },
      id_penginapan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'penginapans',
          key: 'id_penginapan'
        }
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
    await queryInterface.dropTable('Paket_penginapans');
  }
};