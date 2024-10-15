import { Router } from "express";
import { getOrdersInfo } from "../controllers/order.controller";
import { verifyAuth } from "../middlewares/verifyAuth";

const router = Router();

router.get("/get-info", verifyAuth, getOrdersInfo);

export default router;
