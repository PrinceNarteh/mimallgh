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

export const updateCart = async (req: Request, res: Response) => {
  const { cartId } = req.params;
  const { body } = req;
  try {
    let cart = await CartService.getCart(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart = await CartService.updateCart(cartId, body);
    res.status(200).json({ cart });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { cartId } = req.params;
  try {
    CartService.deleteCart(cartId);
    res.status(200).json({ message: "Cart Delete successfully" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
