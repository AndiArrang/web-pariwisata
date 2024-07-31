import { DataTypes } from "sequelize";
import db from "../application/db.js";
import Penginapan from "./penginapan.js";
import PaketPenginapan from "./paket_penginapan.js";
import PaketImages from "./paket_images.js";

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

// relasi many to many paket - penginapan
Paket.belongsToMany(Penginapan, {through: PaketPenginapan,foreignKey: 'id_paket'})
Penginapan.belongsToMany(Paket, {through: PaketPenginapan,foreignKey: 'id_penginapan'})

// relasi one to one paket - paketImages
Paket.hasOne(PaketImages,{foreignKey: 'id_paket'})
PaketImages.belongsTo(Paket,{foreignKey: 'id_paket'})

export default Paket