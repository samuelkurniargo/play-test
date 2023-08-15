import Express from "express";
import {
  getCommentsList,
  addComment,
} from "../controllers/commentsController.js";

const router = Express.Router();

router.get("/:id", getCommentsList);
router.post("/:id", addComment);

export default router;
