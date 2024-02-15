import express from "express";
import usersRoutes from "./routes/users.routes.js";
import cartsRoutes from "./routes/carts.routes.js";

// Crear app
const app = express();

// Middlewares
// const miLog = function (req, res, next) {
//   console.log("---------->>>>> HOLA <<<<<------");
//   next();
// };
// app.use(miLog);

app.use(express.json());

// Routes
app.use(usersRoutes);
app.use(cartsRoutes);
app.use("/public", express.static("public"));

export default app;
