import Comment from "../models/Comment.js";

export const getAllComment = async (videoId) => {
  return await Comment.find({ videoId: videoId }).select(
    "username comment timestamp"
  );
};
export const addComment = async (username, comment, videoId) => {
  const newComment = new Comment({
    username,
    comment,
    videoId,
    date: Date,
  });
  return await newComment.save();
};
