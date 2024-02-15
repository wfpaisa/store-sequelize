import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { CartsModel } from "./carts.model.js";

export const UsersModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "public",
    },
  },
  {
    timestamps: true,
  }
);

UsersModel.hasMany(CartsModel);
CartsModel.belongsTo(UsersModel);
