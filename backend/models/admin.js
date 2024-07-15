import { DataTypes } from "sequelize";
import db from "../application/db.js";

const Admin = db.define('admins',{
  username: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING(45)
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(45)
  },
  name: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING
  }
})

export default Admin;