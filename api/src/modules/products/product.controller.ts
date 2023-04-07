import { Request, Response } from "express";
import * as ProductService from "./product.service";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
