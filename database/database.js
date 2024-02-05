import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("master-store", "pepito", "paspas", {
  host: "localhost",
  dialect: "postgres",
});
