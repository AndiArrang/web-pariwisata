import { DataTypes } from "sequelize";
import db from "../application/db.js";

const Paket = db.define('pakets', {
  id_paket: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  durasi: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

export default Paket