import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CartsModel = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    products: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
