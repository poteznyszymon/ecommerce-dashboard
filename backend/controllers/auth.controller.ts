import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const SignIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    if (!username || !password) {
      res
        .status(400)
        .json({ error: "Both username and password are required" });
      return;
    }

    if (password.length < 6) {
      res
        .status(400)
        .json({ error: "Password should be at lest 6 characters long" });
    }

    const existingUser = await prisma.admin.findUnique({ where: { username } });
    if (existingUser) {
      res.status(400).json({
        success: "false",
        error: "User with that username already exist",
      });
    }

    res.status(200).json({ success: "true" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: "false", error: "Internal server error" });
  }
};
