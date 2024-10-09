import express, { Express } from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
