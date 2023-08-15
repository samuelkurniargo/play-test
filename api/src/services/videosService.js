import {
  getAllVideos,
  getDetailVideo,
} from "../repositories/videoRepository.js";

export const getVideoList = async () => {
  return await getAllVideos();
};

export const getVideoById = async (id) => {
  return await getDetailVideo(id);
};
