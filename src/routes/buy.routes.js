import { Router } from "express";
import { getBuys, createBuy, getBuy } from "../controllers/buy.controllers.js";

const router = Router();

router.get("/", getBuys);
router.post("/", createBuy);
router.get("/:id", getBuy);

export default router;