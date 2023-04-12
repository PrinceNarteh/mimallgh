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

export const getCart = async (req: Request, res: Response) => {
  const { cartId } = req.params;
  try {
    const cart = await CartService.getCart(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ cart });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const createCart = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newCart = {
      ...body,
      userId: req.user?.id,
    };
    const cart = await CartService.createCart(newCart);
    res.status(201).json({ cart });
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

    if (cart.userId !== req.user?.id) {
      return res.status(403).json({ message: "You are not permitted" });
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
    let cart = await CartService.deleteCart(cartId);

    if (cart && cart.id !== req.user?.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await CartService.deleteCart(cartId);

    res.status(200).json({ message: "Cart Delete successfully" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
