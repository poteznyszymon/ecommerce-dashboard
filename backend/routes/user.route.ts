import { Router } from "express";
import { verifyAuth } from "../middlewares/verifyAuth";
import { getAllUsers } from "../controllers/users.controller";

const router = Router();

router.get("/all", verifyAuth, getAllUsers);

export default router;
