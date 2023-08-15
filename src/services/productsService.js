import { getProductByVideo } from "../repositories/productRepository.js";

export const getProductListService = async (videoId) => {
  return await getProductByVideo(videoId);
};
