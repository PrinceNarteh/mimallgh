import { Request, Response } from "express";
import * as OrderService from "./order.service";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json({ orders });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getOrdersByUser(req.user?.id as string);
    res.status(200).json({ orders });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const cart = await OrderService.getOrder(req.user?.id as string);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ cart });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const newCart = {
      ...body,
      userId: req.user?.id as string,
    };
    const cart = await OrderService.createCart(newCart);
    res.status(201).json({ cart });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const { body } = req;
  const { orderId } = req.params;

  try {
    let order = await OrderService.getOrder(orderId);
    if (!order) {
      return res.status(404).json({ message: "Not Found" });
    }

    if (order.userId !== (req.user?.id as string)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    order = await OrderService.updateCart(orderId, body);
    res.status(200).json({ order });
  } catch (error) {}
};

export const deleteCart = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    let order = await OrderService.getOrder(orderId);

    if (order && order.userId !== (req.user?.id as string)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await OrderService.deleteCart(orderId);

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
