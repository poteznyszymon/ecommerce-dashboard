import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      success: "true",
      message: "Users find successfully",
      users: users,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
