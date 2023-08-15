import Express from "express";
import { getProductList } from "../controllers/productsController.js";

const router = Express.Router();

router.get("/:id", getProductList);

export default router;
