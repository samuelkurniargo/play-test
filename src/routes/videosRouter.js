import Express from "express";
import { getVideoList, getDetailVideoById } from "../controllers/videosController.js";

const router = Express.Router();

router.get("/", getVideoList);
router.get("/:id", getDetailVideoById);

export default router;
