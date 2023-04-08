import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    "Hello",
    {
      expiresIn: "1h",
    }
  );
};
