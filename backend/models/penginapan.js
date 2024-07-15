import { DataTypes } from "sequelize";
import db from "../application/db.js";

const Penginapan = db.define('penginapans', {
  id_penginapan: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipe: {
    type: DataTypes.ENUM('hotel','villa'),
    allowNull: false
  }
})

export default Penginapan