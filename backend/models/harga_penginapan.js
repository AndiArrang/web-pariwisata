import { DataTypes } from "sequelize";
import db from "../application/db.js";

const HargaPenginapan = db.define( 'harga_penginapans', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_penginapan: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'penginapans',
      key: 'id_penginapan'
    }
  },
  min_org: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  max_org: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  harga: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
})

export default HargaPenginapan