import { Router } from "express";
import { SignUp } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-in", SignUp);

export default router;
