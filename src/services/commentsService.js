import {
  getAllComment,
  addComment,
} from "../repositories/commentRepository.js";

export const getCommentList = async (videoId) => {
  return await getAllComment(videoId);
};

export const addCommentService = async (username, comment, videoId) => {
  return await addComment(username, comment, videoId);
};
