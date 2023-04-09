import { Request, Response } from "express";
import * as CartService from "./cart.service";

export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const carts = await CartService.getAllCarts();
    res.status(200).json({ carts });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const getCartByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const cart = await CartService.getByUserId(userId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ cart });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
