import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/users.model.js";
import "./models/carts.model.js";

async function runServer() {
  // Test autenticate
  // await sequelize.authenticate();
  // console.log("------- Postgres db conectado -------");

  // Sincronizar tabla
  await sequelize.sync({ force: false });

  // Iniciarmos el servidor
  app.listen(4000);
  console.log("------- Corriendo en el 4000 -------");
}

console.log("----->", process.env.XX_DB);

runServer();
