import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret: string = process.env.JWT_SECRET as string;
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Not authorized" });
  }

  const token = (authHeader as string).split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    const user = jwt.verify(token, secret) as JwtPayload;
    if (!user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    req.user = {
      id: user.id,
      role: user.role,
    };
  } catch (error) {
    return res.status(403).json("Token not valid");
  }
};
