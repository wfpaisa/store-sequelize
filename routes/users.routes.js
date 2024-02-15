import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  createUsers,
  getUserCarts,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
// router.post("/user", createUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);
router.get("/users/:id/carts", getUserCarts);

export default router;
