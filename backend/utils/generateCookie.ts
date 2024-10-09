import { Response } from "express";
import jwt from "jsonwebtoken";

export const generateAndSetCookie = (res: Response, username: string) => {
  const jwtSecretKey = process.env.JWT_SECRET;
  if (!jwtSecretKey) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ username }, jwtSecretKey, {
    expiresIn: "7d",
  });

  res.cookie("JWT_TOKEN", token, {
    httpOnly: true,
    secure: process.env.ENV_MODE === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
