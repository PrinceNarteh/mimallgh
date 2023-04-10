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
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const getOrderByUser = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
