import { DataTypes } from "sequelize";
import db from "../application/db.js";

const PaketPenginapan = db.define('paket_penginapans', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_paket: {
    type: DataTypes.INTEGER,
    references: {
      model: 'pakets',
      key: 'id_paket'
    }   
  },
  id_penginapan: {
    type: DataTypes.INTEGER,
    references: {
      model: 'penginapans',
      key: 'id_penginapan'
    }
  }
})

export default PaketPenginapan