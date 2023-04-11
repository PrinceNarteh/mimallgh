import { User } from "@prisma/client";
import * as express from "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        role: string;
      };
    }
  }
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    id: string;
    role: string;
  }
}
