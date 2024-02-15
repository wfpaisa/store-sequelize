import { Sequelize } from "sequelize";

const HOST = process.env.XX_HOST;
const USER = process.env.XX_USER;
const PASS = process.env.XX_PASS;
const DB = process.env.XX_DB;

// export const sequelize = new Sequelize("master-store", "pepito", "paspas", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false, // Oculta los mensajes en consola
// });
export const sequelize = new Sequelize(DB, USER, PASS, {
  host: HOST,
  dialect: "postgres",
  logging: false, // Oculta los mensajes en consola
});
