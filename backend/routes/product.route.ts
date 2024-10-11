import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  deleteProduct,
} from "../controllers/product.controller";
import { verifyAuth } from "../middlewares/verifyAuth";

const router = Router();

router.post("/add", verifyAuth, addProduct);
router.get("/", verifyAuth, getAllProducts);
router.delete("/:id", verifyAuth, deleteProduct);

export default router;
