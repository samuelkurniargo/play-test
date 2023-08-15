import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  desc: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  link: {
    require: true,
    type: String,
  },
  imageUrl: {
    require: true,
    type: String,
  },
  videoId: {
    require: true,
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
