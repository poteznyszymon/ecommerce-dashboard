import express, { Express } from "express";
import dotenv from "dotenv";
import { v2 } from "cloudinary";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route";
import productRoutes from "./routes/product.route";

dotenv.config();
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
