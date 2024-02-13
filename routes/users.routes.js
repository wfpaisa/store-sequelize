import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  createUsers,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.post("/users", createUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);

export default router;

