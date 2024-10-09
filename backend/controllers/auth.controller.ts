import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../prisma/prisma";
import { generateAndSetCookie } from "../utils/generateCookie";

export const signUp = async (req: Request, res: Response) => {
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
      return;
    }

    const existingUser = await prisma.admin.findUnique({ where: { username } });
    if (existingUser) {
      res.status(400).json({
        success: "false",
        error: "User with that username already exist",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    if (newAdmin) {
      generateAndSetCookie(res, newAdmin.username);
      res.status(200).json({
        success: "true",
        message: "User registered successfully",
        user: newAdmin.username,
      });
      return;
    }

    res.status(400).json({ success: "false", error: "Failed to create user" });
  } catch (error) {
    res.status(500).json({ success: "false", error: "Internal server error" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    if (!username || !password) {
      res.status(400).json({
        success: "false",
        error: "Both username and password are required",
      });
      return;
    }

    const user = await prisma.admin.findUnique({ where: { username } });
    if (!user) {
      res.status(400).json({ success: "false", error: "Invalid user data" });
      return;
    }

    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ success: "false", error: "Invalid user data" });
      return;
    }

    generateAndSetCookie(res, username);
    res.status(200).json({
      success: "true",
      message: "User logged in successfully",
      user: user.username,
    });
  } catch (error) {
    res.status(500).json({ success: "false", error: "Internal server error" });
  }
};
