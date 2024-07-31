import { DataTypes } from "sequelize";
import db from "../application/db.js";

const PaketImages = db.define('paket_images', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_paket: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'pakets',
      key: 'id_paket'
    }   
  },
  url: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  public_id: {
    allowNull: false,
    type: DataTypes.STRING,
  }
})




export default PaketImages