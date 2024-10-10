import { Router } from "express";
import { signUp, signIn, logout } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);

export default router;
