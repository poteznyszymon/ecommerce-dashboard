import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../prisma/prisma";

export const verifyAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtSecretKey = process.env.JWT_SECRET;
    if (!jwtSecretKey) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const token = req.cookies.JWT_TOKEN;
    if (!token) {
      res
        .status(401)
        .json({ success: "false", error: "Unauthorized: No token provided" });
      return;
    }

    const validToken = jwt.verify(token, jwtSecretKey) as JwtPayload;
    if (!validToken || !validToken.username) {
      res
        .status(401)
        .json({ success: "false", error: "Unauthorized: Invalid token" });
      return;
    }

    const user = await prisma.admin.findUnique({
      where: { username: validToken.username },
      select: { id: true, username: true },
    });

    if (!user) {
      res
        .status(401)
        .json({ success: "false", error: "Unauthorized: User not found" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: "false", error: "Internal server error" });
  }
};
