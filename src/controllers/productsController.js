import { getProductListService } from "../services/productsService.js";

export const getProductList = async (req, res) => {
  try {

    const videoId = req.params.id;
    const product = await getProductListService(videoId);
   
    res.json(product);
  } catch (error) {
    res.status(500).json({
      messsage: "Server Error",
    });
  }
};
