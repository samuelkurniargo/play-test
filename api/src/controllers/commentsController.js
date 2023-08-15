import {
  getCommentList as commentService,
  addCommentService,
} from "../services/commentsService.js";

export const getCommentsList = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await commentService(id);
    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const videoId = req.params.id;
    const { username, comment } = req.body;

    if (!username || !comment) {
      return res.status(400).json({
        message: "Tidak boleh kosong",
      });
    }
    const newComment = await addCommentService(username, comment, videoId);
    res.status(201).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail",
    });
  }
};
