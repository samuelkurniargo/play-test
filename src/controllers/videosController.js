import {
  getVideoList as videoService,
  getVideoById,
} from "../services/videosService.js";

export const getVideoList = async (req, res) => {
  //   console.log("testing");
  try {
    const videos = await videoService();
    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getDetailVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await getVideoById(id);
    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
