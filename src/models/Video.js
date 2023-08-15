import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  thumbnailUrl: {
    require: true,
    type: String,
  },
  embededYoutube: {
    require: true,
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
