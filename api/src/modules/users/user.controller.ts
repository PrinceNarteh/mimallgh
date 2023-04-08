import bcrypt from "bcryptjs";
import type { Request, Response } from "express";

import { db } from "../../utils/db.server";
import { generateToken } from "../../utils/generateToken";
import {
  getUserByEmail,
  getUserByEmailOrPhoneNumber,
  getUserByPhoneNumber,
} from "./user.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    let user = await getUserByEmail(body.email);
    if (user) {
      return res.status(400).json({ message: "Email is already in used." });
    }

    user = await getUserByPhoneNumber(body.phoneNumber);
    if (user) {
      return res
        .status(400)
        .json({ message: "Phone number is already in used." });
    }

    const hashPassword = await bcrypt.hash(body.password, 12);

    user = await db.user.create({
      data: {
        ...body,
        password: hashPassword,
      },
    });

    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { emailOrPhoneNumber, password } = req.body;

    let user = await getUserByEmailOrPhoneNumber(emailOrPhoneNumber);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
