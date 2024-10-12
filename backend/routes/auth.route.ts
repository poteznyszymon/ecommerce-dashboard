import { Router } from "express";
import { signUp, signIn, logout, getMe } from "../controllers/auth.controller";
import { verifyAuth } from "../middlewares/verifyAuth";

const router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);
router.get("/get-me", verifyAuth, getMe);

export default router;
