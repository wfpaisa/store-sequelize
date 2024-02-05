import express from "express";
import usersRoutes from "./routes/users.routes.js";

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

export default app;
