import Video from "../models/Video.js";

// const Video = require("../models/videoModel");

export const getAllVideos = async () => {
  return await Video.find().select('_id title thumbnailUrl');
};

export const getDetailVideo = async (id) => {
  return await Video.findById(id);
};
