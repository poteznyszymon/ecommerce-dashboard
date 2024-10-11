import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/product.controller";
import { verifyAuth } from "../middlewares/verifyAuth";

const router = Router();

router.post("/add", verifyAuth, addProduct);
router.get("/", verifyAuth, getAllProducts);

export default router;
