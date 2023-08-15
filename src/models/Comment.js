import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: {
    require: true,
    type: String,
  },
  videoId: {
    require: true,
    type: String,
  },
  comment: {
    require: true,
    type: String,
  },
  timestamp: {
    require: true,
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
