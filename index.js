import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import videoRouter from "./src/routes/videosRouter.js";
import productRouter from "./src/routes/productsRouter.js";
import commentRouter from "./src/routes/commentsRouter.js";

const app = express();
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on("error", (error) => {
//   console.log(error);
// });

// database.once("connected", () => {
//   console.log("Database connected");
// });

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/videos", videoRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname , "../frontend/dist/index.html"), (err) => {
    res.status(500).send(err);
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });