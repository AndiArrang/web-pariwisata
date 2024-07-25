import { DataTypes } from "sequelize";
import db from "../application/db.js";
import HargaPenginapan from "./harga_penginapan.js";

const Penginapan = db.define('penginapans', {
  id_penginapan: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipe: {
    type: DataTypes.ENUM('hotel','villa'),
    allowNull: false
  }
})

Penginapan.hasMany(HargaPenginapan,{foreignKey: 'id_penginapan'})
HargaPenginapan.belongsTo(Penginapan,{foreignKey: 'id_penginapan'})

export default Penginapan