import { Router } from "express";
import {
  getCarts,
  createCarts,
  updateCarts,
  deleteCarts,
} from "../controllers/carts.controller.js";

const router = Router();

router.get("/carts", getCarts);
router.post("/carts", createCarts);
router.put("/carts/:id", updateCarts);
router.delete("/carts/:id", deleteCarts);

export default router;
