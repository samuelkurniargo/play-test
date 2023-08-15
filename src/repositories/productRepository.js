import Product from "../models/Product.js";

export const getProductByVideo = async (videoId) => {
  //   console.log(await Product.find());
  return await Product.find({ videoId: videoId }).select(
    "_id link title price"
  );
};
