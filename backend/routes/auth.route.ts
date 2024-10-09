import { Router } from "express";
import { SignIn } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-in", SignIn);

export default router;
